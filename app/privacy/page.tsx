import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.privacy;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function PrivacyPage() {
  return <LegalPage page={page} />;
}
