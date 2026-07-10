import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages["privacy-choices"];

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function PrivacyChoicesPage() {
  return <LegalPage page={page} />;
}
