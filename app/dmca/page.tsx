import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.dmca;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function DmcaPage() {
  return <LegalPage page={page} />;
}
