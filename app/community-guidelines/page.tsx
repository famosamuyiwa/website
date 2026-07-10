import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages["community-guidelines"];

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function CommunityGuidelinesPage() {
  return <LegalPage page={page} />;
}
