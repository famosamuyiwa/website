import {
  legalConfig,
  legalContactLabels,
  legalNavigation,
  type LegalContactKey,
  type LegalPageContent,
} from "@/lib/legal";
import Link from "next/link";

type Props = {
  page: LegalPageContent;
};

export function LegalPage({ page }: Props) {
  return (
    <main className="text-ink min-h-screen bg-white">
      <header className="border-ink/10 border-b px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-extrabold">
            Leankly
          </Link>
          <nav
            aria-label="Legal pages"
            className="text-muted flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold"
          >
            <Link className="hover:text-aqua" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-aqua" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-aqua" href="/safety">
              Safety
            </Link>
            <Link className="hover:text-aqua" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <p className="text-coral text-sm font-extrabold uppercase tracking-wide">
          Legal
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          {page.title}
        </h1>
        <p className="text-muted mt-5 max-w-3xl text-base font-medium leading-7 md:text-lg">
          {page.subtitle}
        </p>
        <p className="text-muted mt-4 text-sm font-semibold">
          Last updated: {legalConfig.lastUpdated}
        </p>

        <section className="border-coral/25 bg-blush mt-8 rounded-lg border p-5">
          <h2 className="text-lg font-extrabold">Counsel review required</h2>
          <p className="text-muted mt-2 text-sm font-medium leading-6">
            This page is implementation-ready compliance scaffolding for a
            U.S.-first launch. Replace bracketed legal details and confirm the
            final language with counsel before production launch or app-store
            submission.
          </p>
        </section>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted mt-4 text-base font-medium leading-8"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="text-muted mt-4 list-disc space-y-3 pl-6 text-base font-medium leading-7">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <ContactPanel contacts={page.contacts} />
        <LegalIndex currentSlug={page.slug} />
      </article>
    </main>
  );
}

function ContactPanel({ contacts }: { contacts: readonly LegalContactKey[] }) {
  return (
    <section className="border-ink/10 bg-cloud mt-14 rounded-lg border p-5">
      <h2 className="text-xl font-extrabold">Contact points</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {contacts.map((contact) => {
          const email = legalConfig[contact];

          return (
            <a
              key={contact}
              href={`mailto:${email}`}
              className="rounded-lg bg-white p-4 text-sm font-bold shadow-sm transition hover:-translate-y-0.5"
            >
              <span className="text-muted block">
                {legalContactLabels[contact]}
              </span>
              <span className="text-ink mt-1 block">{email}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function LegalIndex({ currentSlug }: { currentSlug: string }) {
  return (
    <nav
      aria-label="All legal pages"
      className="border-ink/10 mt-10 border-t pt-6"
    >
      <h2 className="text-muted text-sm font-extrabold uppercase tracking-wide">
        All legal pages
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {legalNavigation.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            aria-current={item.slug === currentSlug ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${
              item.slug === currentSlug
                ? "bg-ink text-white"
                : "bg-ink/5 text-ink hover:bg-aqua hover:text-white"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
