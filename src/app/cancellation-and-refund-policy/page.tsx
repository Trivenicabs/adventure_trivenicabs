import type { Metadata } from "next";
import Legal from "@/components/Legal";

export const metadata: Metadata = { title: "Cancellation & Refund Policy" };

export default function Page() {
  return (
    <Legal
      title="Cancellation & Refund Policy"
      sections={[
        { h: "Cancellation by you", p: ["Cancellations made with reasonable advance notice (typically 48–72 hours before the activity) are eligible for free cancellation or a full refund of any token paid, unless stated otherwise for peak-date packages."] },
        { h: "Late cancellation", p: ["Cancellations close to the activity date may incur a fee to cover operator commitments. Exact terms are shared at the time of booking."] },
        { h: "Weather & safety", p: ["If an activity is cancelled by the operator due to weather, water levels or safety, you may reschedule for free or receive a full refund."] },
        { h: "Refund timeline", p: ["Approved refunds, where a payment was made, are processed to the original payment method, typically within 5–7 business days."] },
        { h: "How to cancel", p: ["To cancel or reschedule, message us on WhatsApp or call us as early as possible so we can assist you."] },
      ]}
    />
  );
}
