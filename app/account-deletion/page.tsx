import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages["account-deletion"];

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function AccountDeletionPage() {
  return <LegalPage page={page} />;
}
