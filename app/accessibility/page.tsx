import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.accessibility;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function AccessibilityPage() {
  return <LegalPage page={page} />;
}
