// scripts/check-crosslinks.mjs
//
// Checks every main-site path in src/lib/crosslinks.ts against the route
// manifest the main site's build produces, and reports two kinds of problem:
//
//   1. A path that is not in the manifest. That is a link to a 404, which is
//      worse than no link at all — it costs the reader a dead end and the
//      main site a crawl of a page that does not exist.
//   2. The same path twice inside one transport set. The panel keys its list
//      items on the path, so a repeat is a duplicate React key and the reader
//      is offered the same page twice under two different labels.
//
// The manifest lives in the main site's repository, not this one, so the path
// to it has to be supplied. In the usual side-by-side checkout that is:
//
//   node scripts/check-crosslinks.mjs ../Desktop/triveni_website/src/generated/known-routes.json
//
// It is generated there by scripts/gen-route-manifest.mjs after a production
// build, so it reflects the pages that were actually emitted rather than the
// routes somebody intended. If the manifest is older than the main site's last
// deploy, re-run that script before trusting a failure here.
//
// Exits non-zero if anything is wrong, so it can gate a commit.

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..");

const manifestArg =
  process.argv[2] ??
  process.env.TRIVENI_ROUTE_MANIFEST ??
  resolve(repo, "..", "Desktop", "triveni_website", "src", "generated", "known-routes.json");

if (!existsSync(manifestArg)) {
  console.error(`no route manifest at ${manifestArg}`);
  console.error("pass the path as the first argument, or set TRIVENI_ROUTE_MANIFEST");
  process.exit(2);
}

const known = new Set(JSON.parse(readFileSync(manifestArg, "utf8")));
console.log(`manifest: ${manifestArg} (${known.size} paths)`);

const mod = await import(pathToFileURL(join(repo, "src", "lib", "crosslinks.ts")).href);
const paths = mod.allCrossLinkPaths();
const sets = mod.allTransportSets();

let problems = 0;

const missing = paths.filter((p) => !known.has(p)).sort();
if (missing.length) {
  problems += missing.length;
  console.error(`\n${missing.length} path(s) not in the manifest:`);
  for (const p of missing) console.error(`  ${p}`);
}

for (const { name, links } of sets) {
  const seen = new Map();
  for (const l of links) seen.set(l.path, (seen.get(l.path) ?? 0) + 1);
  const dupes = [...seen.entries()].filter(([, n]) => n > 1);
  if (dupes.length) {
    problems += dupes.length;
    console.error(`\nduplicate path(s) in set ${name}:`);
    for (const [p, n] of dupes) console.error(`  ${p} x${n}`);
  }
}

console.log(
  `\nchecked ${paths.length} distinct paths across ${sets.length} transport sets ` +
    `and ${mod.crossLinkedSlugs().length} per-page links`,
);

if (problems) {
  console.error(`\n${problems} problem(s) found`);
  process.exit(1);
}
console.log("all paths resolve, no duplicates within a set");
