import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.terms;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function TermsPage() {
  return <LegalPage page={page} />;
}
