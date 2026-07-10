import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.contact;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function ContactPage() {
  return <LegalPage page={page} />;
}
