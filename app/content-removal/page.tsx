import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages["content-removal"];

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function ContentRemovalPage() {
  return <LegalPage page={page} />;
}
