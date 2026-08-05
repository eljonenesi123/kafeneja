import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Kafeneja in Blloku, Tirana, reserve a table, or send us a message.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
