import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.safety;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function SafetyPage() {
  return <LegalPage page={page} />;
}
