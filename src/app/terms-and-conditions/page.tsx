import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <Legal
      title="Terms & Conditions"
      sections={[
        { h: "Bookings", p: ["All bookings are subject to availability and confirmation. Prices shown are indicative starting prices and may vary by date, group size, season and inclusions."] },
        { h: "Safety & eligibility", p: ["Adventure activities carry inherent risks. Participants must meet age, weight and health requirements, follow all guide instructions and sign operator waivers where required. We reserve the right to refuse participation on safety grounds."] },
        { h: "Rentals", p: ["Self-drive rentals require a valid driving licence and ID. Renters are responsible for traffic compliance, fuel and any damage as per the rental agreement."] },
        { h: "Liability", p: ["Triveni acts as a booking facilitator working with licensed operators. Liability is limited to the amount paid for the booking, to the extent permitted by law."] },
        { h: "Changes", p: ["Activities may be rescheduled or cancelled due to weather, water levels or safety conditions; in such cases we offer rescheduling or a refund per the cancellation policy."] },
      ]}
    />
  );
}
