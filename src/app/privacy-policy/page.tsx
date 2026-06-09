import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <Legal
      title="Privacy Policy"
      sections={[
        { h: "Information we collect", p: ["We collect the details you share when enquiring or booking — name, phone/WhatsApp number, travel dates and preferences — solely to process and service your booking."] },
        { h: "How we use it", p: ["Your information is used to confirm bookings, coordinate with activity operators, send trip updates and provide support. We do not sell your data to third parties."] },
        { h: "WhatsApp & calls", p: ["When you contact us via WhatsApp or phone, that communication is handled per the respective platform's policies in addition to ours."] },
        { h: "Analytics", p: ["We use privacy-respecting analytics (e.g. GA4) to understand site usage and improve the experience. You can opt out via your browser settings."] },
        { h: "Your rights", p: ["You may request access to, correction of, or deletion of your personal data at any time by contacting us."] },
      ]}
    />
  );
}
