import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80svh] place-items-center overflow-hidden">
      <div className="aurora left-1/4 top-1/3 h-72 w-72 bg-gold/20" />
      <div className="aurora right-1/4 bottom-1/4 h-72 w-72 bg-cyan/20 [animation-delay:-4s]" />
      <div className="container-x relative text-center">
        <div className="font-display text-[clamp(4rem,18vw,11rem)] font-semibold leading-none shimmer-text">
          404
        </div>
        <p className="mx-auto mt-2 max-w-md text-lg text-mute">
          Looks like this trail doesn&apos;t exist. Let&apos;s get you back to the river.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-gold">Back to home</Link>
          <Link href="/book-now" className="btn btn-ghost">Book an adventure</Link>
        </div>
      </div>
    </section>
  );
}
