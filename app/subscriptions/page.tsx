import { LegalPage } from "@/components/legal-page";
import { legalPages } from "@/lib/legal";

const page = legalPages.subscriptions;

export const metadata = {
  title: `${page.title} | Leankly`,
  description: page.subtitle,
};

export default function SubscriptionsPage() {
  return <LegalPage page={page} />;
}
