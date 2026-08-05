import type { Metadata } from "next";
import JournalIndexContent from "@/components/journal/JournalIndexContent";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Roasting notes, events, and stories from Kafeneja in Blloku, Tirana.",
};

export default function JournalIndex() {
  return <JournalIndexContent />;
}
