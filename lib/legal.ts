export const legalConfig = {
  entityName: "[Legal entity name]",
  mailingAddress: "[Business mailing address]",
  supportEmail: "support@leankly.com",
  privacyEmail: "privacy@leankly.com",
  legalEmail: "legal@leankly.com",
  dmcaEmail: "dmca@leankly.com",
  safetyEmail: "safety@leankly.com",
  appName: "Leankly",
  lastUpdated: "July 2, 2026",
} as const;

export type LegalContactKey =
  | "supportEmail"
  | "privacyEmail"
  | "legalEmail"
  | "dmcaEmail"
  | "safetyEmail";

export type LegalSlug =
  | "privacy"
  | "terms"
  | "privacy-choices"
  | "community-guidelines"
  | "safety"
  | "account-deletion"
  | "subscriptions"
  | "dmca"
  | "content-removal"
  | "accessibility"
  | "contact";

export type LegalSection = Readonly<{
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}>;

export type LegalPageContent = Readonly<{
  slug: LegalSlug;
  title: string;
  subtitle: string;
  contacts: readonly LegalContactKey[];
  sections: readonly LegalSection[];
}>;

export const legalContactLabels: Record<LegalContactKey, string> = {
  supportEmail: "Support",
  privacyEmail: "Privacy",
  legalEmail: "Legal",
  dmcaEmail: "Copyright",
  safetyEmail: "Safety",
};

export const legalNavigation: readonly Pick<
  LegalPageContent,
  "slug" | "title"
>[] = [
  { slug: "privacy", title: "Privacy" },
  { slug: "terms", title: "Terms" },
  { slug: "privacy-choices", title: "Privacy Choices" },
  { slug: "community-guidelines", title: "Community Guidelines" },
  { slug: "safety", title: "Safety" },
  { slug: "account-deletion", title: "Account Deletion" },
  { slug: "subscriptions", title: "Subscriptions" },
  { slug: "dmca", title: "DMCA" },
  { slug: "content-removal", title: "Content Removal" },
  { slug: "accessibility", title: "Accessibility" },
  { slug: "contact", title: "Contact" },
];

const collectedData = [
  "Account and profile data, including name, email address, age, avatar, referral code, profile location text, and neighborhood coordinates.",
  "Leank content, including title, description, category, event date and time, online or location status, cover images, requested participant count, reactions, requests, participants, and attendance state.",
  "Messages and chat metadata, including message content, replies, read state, participants, and last-activity timestamps.",
  "Safety and moderation data, including reports, blocks, abuse notes, admin review state, and signals used to classify or prioritize reports.",
  "Device and notification data, including Expo/Appwrite push targets, platform, permission state, app version, and delivery metadata.",
  "Subscription and entitlement data from RevenueCat, Apple, and Google, including product, entitlement, renewal, restore, and webhook state.",
  "Diagnostics and security data, including IP-derived request metadata, logs, crash/error diagnostics, rate-limit data, and fraud or abuse signals.",
  "Website data, including routine server logs and externally loaded Unsplash image requests from the marketing page.",
] as const;

const prohibitedConduct = [
  "Harassment, hate, bullying, doxxing, threats, intimidation, stalking, or unwanted sexual attention.",
  "Sexual exploitation, non-consensual intimate imagery, grooming, trafficking, prostitution, or any sexual content involving minors.",
  "Illegal goods or services, weapons, controlled substances, scams, fraud, impersonation, or attempts to evade law enforcement.",
  "Content or plans that create a real risk of physical harm, including dangerous stunts, reckless driving, violence, or unsafe meetups.",
  "Spam, scraping, automated account creation, platform manipulation, or attempts to bypass limits, moderation, payments, or security controls.",
  "Posting content you do not have rights to use, including copyrighted images, names, logos, or private information.",
] as const;

export const legalPages: Record<LegalSlug, LegalPageContent> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    subtitle:
      "How Leankly collects, uses, discloses, and protects information for the app and website.",
    contacts: ["privacyEmail", "supportEmail"],
    sections: [
      {
        heading: "Scope and controller",
        paragraphs: [
          `${legalConfig.entityName} provides ${legalConfig.appName}. This policy applies to the Leankly mobile app, the public website, support workflows, and related backend services. The service is intended for users in the United States who are at least 18 years old.`,
          `Replace ${legalConfig.entityName}, ${legalConfig.mailingAddress}, and the listed inboxes with production legal details before launch or store submission.`,
        ],
      },
      { heading: "Information we collect", bullets: collectedData },
      {
        heading: "How we use information",
        bullets: [
          "Create and secure accounts, verify sessions, complete onboarding, and keep profiles current.",
          "Show relevant leanks, filters, requests, participants, chats, profile lists, referrals, usage limits, and entitlement state.",
          "Deliver push notifications, realtime chat updates, password recovery, support replies, and operational messages.",
          "Moderate content, classify leanks, investigate reports, enforce community rules, prevent fraud and abuse, and protect user safety.",
          "Process subscriptions, restore purchases, reconcile RevenueCat webhooks, and manage Leankly+ access.",
          "Debug, measure reliability, maintain security, comply with law, respond to valid legal requests, and enforce our terms.",
        ],
      },
      {
        heading: "Service providers and disclosures",
        bullets: [
          "Appwrite for authentication, file storage, password recovery, and push target support.",
          "RevenueCat, Apple, and Google for subscription products, purchase state, receipts, and entitlement reconciliation.",
          "Mapbox and Expo Location for location search, reverse geocoding, foreground-location permission handling, and saved neighborhood coordinates.",
          "Sentry, backend logs, hosting, PostgreSQL, Redis, Socket.io, and BullMQ for diagnostics, realtime delivery, reliability, and infrastructure operations.",
          "OpenAI-powered classification workers for leank and safety-related moderation support, not for ad targeting.",
          "Unsplash and related content delivery services when the marketing website loads externally hosted public imagery.",
          "Law enforcement, courts, regulators, safety partners, or counterparties when required by law or reasonably necessary to protect rights, safety, users, or the service.",
        ],
      },
      {
        heading:
          "No sale, sharing, targeted advertising, or nonessential website tracking",
        paragraphs: [
          "Leankly does not sell personal information, share personal information for cross-context behavioral advertising, or use personal information for targeted advertising in this version. The public website does not add analytics, marketing pixels, CAPTCHA, or nonessential cookies in this version.",
          "If that changes, the privacy policy and privacy choices page must be updated before the new tracking or advertising behavior is enabled.",
        ],
      },
      {
        heading: "Your choices",
        bullets: [
          `Request access, correction, deletion, portability, or other privacy help by emailing ${legalConfig.privacyEmail}.`,
          "Delete your account in the app from Profile settings or use the outside-app deletion instructions on the account deletion page.",
          "Manage push notifications and location permissions through your device settings.",
          "Use the privacy choices page for U.S. state privacy requests, opt-out requests, authorized-agent requests, and sensitive-data questions.",
        ],
      },
      {
        heading: "Retention, security, and age limit",
        paragraphs: [
          "We keep information for as long as needed to provide the service, comply with legal obligations, resolve disputes, enforce agreements, support safety investigations, prevent fraud, and maintain operational records.",
          "We use reasonable administrative, technical, and organizational safeguards. No online service can guarantee perfect security.",
          "Leankly is for adults 18 and older. We do not knowingly collect personal information from children under 13.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    subtitle:
      "The rules for using Leankly, including user content, meetups, safety, subscriptions, and account responsibilities.",
    contacts: ["supportEmail", "legalEmail", "safetyEmail"],
    sections: [
      {
        heading: "Agreement and eligibility",
        paragraphs: [
          `These terms are between you and ${legalConfig.entityName}. By using Leankly, you agree to these terms, the privacy policy, community guidelines, safety guidance, and any app-store terms that apply to your device or subscription.`,
          "You must be at least 18 years old and located in the United States to use Leankly in this version.",
        ],
      },
      {
        heading: "Accounts and accurate information",
        bullets: [
          "You are responsible for your account, profile, age, location, content, messages, and conduct.",
          "Provide accurate onboarding and profile information and keep it current.",
          "Do not share your account, impersonate another person, or create accounts to evade moderation, limits, or suspension.",
          "You may delete your account through the app or the outside-app deletion process.",
        ],
      },
      {
        heading: "User content and license",
        paragraphs: [
          "Leankly includes user-generated leanks, profiles, images, messages, reports, and other content. You keep ownership of content you own, but you grant Leankly a worldwide, nonexclusive, royalty-free license to host, store, reproduce, display, transmit, moderate, remove, and adapt that content as needed to operate, protect, and improve the service.",
          "You represent that you have the rights needed to post your content and that your content does not violate law, these terms, or another person's rights.",
        ],
      },
      {
        heading: "Meetups and offline safety",
        paragraphs: [
          "Leankly helps adults discover and coordinate activities. Leankly does not organize, supervise, endorse, insure, or control user meetups. Leankly does not perform background checks and cannot guarantee that any user, leank, location, activity, or meetup is safe.",
          "Use judgment, meet in public places when appropriate, tell someone where you are going, arrange your own transportation, and call emergency services if you face immediate danger.",
        ],
      },
      { heading: "Prohibited conduct", bullets: prohibitedConduct },
      {
        heading: "Subscriptions and paid features",
        paragraphs: [
          "Leankly+ subscriptions are sold through Apple App Store or Google Play and managed with RevenueCat entitlement state. Store billing terms, cancellation tools, renewal rules, taxes, refunds, and payment methods are controlled by the applicable store.",
          "Deleting your Leankly account does not automatically cancel an Apple or Google subscription. You must cancel through the store account that manages the purchase.",
        ],
      },
      {
        heading: "Moderation and legal terms to finalize",
        paragraphs: [
          "We may remove content, limit visibility, close leanks, suspend users, disable accounts, preserve evidence, or report conduct to authorities when needed to protect users, comply with law, or enforce these terms.",
          "Counsel should finalize governing law, venue, arbitration or court process, class-action waiver, warranty disclaimer, limitation of liability, indemnity, and state-specific consumer terms before launch.",
        ],
      },
    ],
  },
  "privacy-choices": {
    slug: "privacy-choices",
    title: "Privacy Choices",
    subtitle:
      "How to submit privacy requests and manage opt-out choices for Leankly.",
    contacts: ["privacyEmail", "supportEmail"],
    sections: [
      {
        heading: "Submit a privacy request",
        paragraphs: [
          `Email ${legalConfig.privacyEmail} with the subject "Privacy Request" and describe the request you want to make. We may ask for information needed to verify your identity and protect your account.`,
        ],
        bullets: [
          "Access or portability request.",
          "Correction request.",
          "Deletion request.",
          "Opt-out of sale, sharing, targeted advertising, or profiling that produces legal or similarly significant effects.",
          "Limit-use request for sensitive personal information, where applicable.",
          "Appeal of a privacy-rights decision, where required by applicable law.",
        ],
      },
      {
        heading: "Current opt-out status",
        paragraphs: [
          "Leankly does not sell personal information, share personal information for cross-context behavioral advertising, use targeted advertising, or add nonessential tracking to the website in this version.",
        ],
      },
      {
        heading: "Authorized agents and device controls",
        bullets: [
          "Authorized agents may email a request with proof of authorization.",
          "Turn off push notifications and location permission in iOS or Android settings.",
          "Cancel paid subscriptions through the Apple App Store or Google Play account that manages the purchase.",
          "Delete your Leankly account in the app or through the outside-app deletion instructions.",
        ],
      },
    ],
  },
  "community-guidelines": {
    slug: "community-guidelines",
    title: "Community Guidelines",
    subtitle:
      "The behavior standards for leanks, profiles, chats, requests, and reports.",
    contacts: ["safetyEmail", "supportEmail"],
    sections: [
      {
        heading: "Adults only and real-world respect",
        paragraphs: [
          "Leankly is for adults 18 and older. Treat other users with respect in profiles, leanks, requests, chats, reports, and offline meetups.",
        ],
      },
      { heading: "Not allowed", bullets: prohibitedConduct },
      {
        heading: "Meetup expectations",
        bullets: [
          "Be honest about what the leank is, where it is, when it happens, who is expected, and whether it is online or in person.",
          "Do not pressure someone to share private information, change locations, drink, use substances, send images, or meet alone.",
          "Respect a no, a block, a declined request, or a user leaving a chat or leank.",
          "Use public places and normal personal-safety practices for new meetups.",
        ],
      },
      {
        heading: "Report and block",
        paragraphs: [
          "Use in-app report and block tools when another user violates these rules. For urgent safety, exploitation, copyright, non-consensual intimate imagery, or legal requests, use the safety, content-removal, DMCA, or contact pages.",
        ],
      },
    ],
  },
  safety: {
    slug: "safety",
    title: "Safety",
    subtitle:
      "Practical guidance for using Leankly around people, places, chats, and meetups.",
    contacts: ["safetyEmail", "supportEmail"],
    sections: [
      {
        heading: "Emergency situations",
        paragraphs: [
          "Leankly is not an emergency service. If you are in immediate danger, call 911 or your local emergency number first.",
        ],
      },
      {
        heading: "Before meeting",
        bullets: [
          "Review the leank details and chat before joining.",
          "Meet in public or familiar places when meeting someone new.",
          "Tell a trusted person where you are going and when you expect to return.",
          "Arrange your own transportation and keep control of your phone, wallet, and keys.",
          "Trust your judgment. If something feels wrong, leave or do not go.",
        ],
      },
      {
        heading: "What Leankly does and does not do",
        paragraphs: [
          "Leankly provides reporting, blocking, moderation, safety-contact, and account-enforcement tools. Leankly does not perform background checks, supervise meetups, verify every location, or guarantee another user's identity, intent, safety, or conduct.",
        ],
      },
      {
        heading: "Report safety issues",
        paragraphs: [
          `Use in-app reporting when available. For urgent platform safety review outside the app, email ${legalConfig.safetyEmail}. Include your account email, usernames, leank or chat details, screenshots if safe to share, and what action you are requesting.`,
        ],
      },
    ],
  },
  "account-deletion": {
    slug: "account-deletion",
    title: "Account Deletion",
    subtitle:
      "How to delete your Leankly account in the app or request deletion outside the app.",
    contacts: ["supportEmail", "privacyEmail"],
    sections: [
      {
        heading: "Delete in the app",
        bullets: [
          "Open Leankly.",
          "Go to Profile.",
          "Open Settings.",
          "Open Edit Profile.",
          "Tap Delete Account and confirm the destructive prompt.",
        ],
      },
      {
        heading: "Request deletion outside the app",
        paragraphs: [
          `If you cannot access the app, email ${legalConfig.supportEmail} with the subject "Account Deletion Request". Use the email address associated with your Leankly account when possible. We may ask for verification before deleting the account.`,
        ],
      },
      {
        heading: "What deletion does",
        paragraphs: [
          "Account deletion deactivates the backend user profile and removes or disables associated domain data such as hosted leanks, participation, reactions, messages, blocks, reports, referrals, usage records, entitlements, and push-target state according to the current backend deletion workflow.",
          "Some records may be retained where needed for security, fraud prevention, legal obligations, dispute resolution, payment records, backups, or safety investigations.",
        ],
      },
      {
        heading: "Subscriptions",
        paragraphs: [
          "Deleting your Leankly account does not automatically cancel subscriptions managed by Apple or Google. Cancel the subscription through the App Store or Google Play account used to purchase it.",
        ],
      },
    ],
  },
  subscriptions: {
    slug: "subscriptions",
    title: "Subscriptions",
    subtitle:
      "How Leankly+ purchases, renewals, restores, cancellations, and account deletion work.",
    contacts: ["supportEmail"],
    sections: [
      {
        heading: "Leankly+",
        paragraphs: [
          "Leankly+ is a paid entitlement that can unlock premium app behavior such as higher limits or advanced surfaces. Available packages, pricing, renewal periods, trials, taxes, and store terms are shown by Apple App Store or Google Play before purchase.",
        ],
      },
      {
        heading: "Billing and renewal",
        bullets: [
          "Subscriptions are billed by Apple or Google through the store account used to subscribe.",
          "RevenueCat helps Leankly read purchase and entitlement state, but it does not replace the store cancellation flow.",
          "Subscriptions may renew automatically unless canceled through the applicable store before the renewal deadline shown by that store.",
          "Refunds, billing issues, chargebacks, and payment-method updates are handled by the applicable store unless that store directs you to Leankly.",
        ],
      },
      {
        heading: "Restore and account deletion",
        paragraphs: [
          "Use Restore Purchases in the app to refresh entitlement state when the store account has an active purchase. Deleting your Leankly account does not cancel an Apple or Google subscription; cancel through the store account separately.",
        ],
      },
    ],
  },
  dmca: {
    slug: "dmca",
    title: "DMCA Copyright Policy",
    subtitle:
      "How copyright owners can request removal of allegedly infringing content.",
    contacts: ["dmcaEmail", "legalEmail"],
    sections: [
      {
        heading: "Copyright contact",
        paragraphs: [
          `Send copyright notices to ${legalConfig.dmcaEmail}. Before relying on DMCA safe-harbor processes, ${legalConfig.entityName} must register and maintain a designated DMCA agent with the U.S. Copyright Office.`,
        ],
      },
      {
        heading: "Notice requirements",
        bullets: [
          "Your physical or electronic signature.",
          "Identification of the copyrighted work claimed to be infringed.",
          "Identification of the content to remove or disable, including URLs, screenshots, usernames, leank titles, or other details that help us locate it.",
          "Your name, mailing address, telephone number, and email address.",
          "A statement that you have a good-faith belief the disputed use is not authorized.",
          "A statement, under penalty of perjury, that the notice is accurate and that you are the copyright owner or authorized to act for the owner.",
        ],
      },
      {
        heading: "Counter notices and repeat infringement",
        paragraphs: [
          "If we remove content based on a copyright notice, we may notify the affected user and explain available counter-notice options where appropriate. We may suspend or terminate repeat infringers.",
        ],
      },
    ],
  },
  "content-removal": {
    slug: "content-removal",
    title: "Content Removal",
    subtitle:
      "How to request review or removal of harmful, illegal, abusive, or non-consensual content.",
    contacts: ["safetyEmail", "legalEmail", "dmcaEmail"],
    sections: [
      {
        heading: "What to report here",
        bullets: [
          "Non-consensual intimate imagery, threats to share intimate imagery, sexual exploitation, or grooming concerns.",
          "Harassment, threats, doxxing, impersonation, scams, illegal activity, or credible safety risks.",
          "A leank, profile, image, chat, or request that violates the community guidelines.",
          "Copyright complaints should use the DMCA page so the notice has the required copyright details.",
        ],
      },
      {
        heading: "How to submit",
        paragraphs: [
          `Email ${legalConfig.safetyEmail} with the subject "Content Removal Request". Include the account email you use for Leankly, usernames, leank or chat details, screenshots if safe to share, the reason for removal, and whether there is an immediate safety risk.`,
        ],
      },
      {
        heading: "Review process",
        paragraphs: [
          "Leankly may remove, restrict, preserve, or escalate content based on the request, applicable law, safety risk, and the community guidelines. Time-sensitive safety and intimate-image reports are prioritized and handled under applicable legal deadlines.",
        ],
      },
    ],
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility Statement",
    subtitle:
      "Leankly's accessibility target and how to report accessibility barriers.",
    contacts: ["supportEmail"],
    sections: [
      {
        heading: "Our target",
        paragraphs: [
          "Leankly aims to make the public website and app usable by people with disabilities and to track WCAG 2.2 AA as the practical accessibility target for new public surfaces.",
        ],
      },
      {
        heading: "Report a barrier",
        paragraphs: [
          `Email ${legalConfig.supportEmail} with the subject "Accessibility". Include the page or screen, device, browser or app version, assistive technology if any, what you expected, and what happened.`,
        ],
      },
      {
        heading: "Known limits",
        paragraphs: [
          "The public website uses external images and the mobile app includes native platform controls, realtime content, uploaded media, maps, and chat. Some accessibility issues may require platform-specific fixes or provider changes.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact",
    subtitle:
      "The public contact points for support, privacy, safety, legal, and copyright requests.",
    contacts: [
      "supportEmail",
      "privacyEmail",
      "safetyEmail",
      "legalEmail",
      "dmcaEmail",
    ],
    sections: [
      {
        heading: "Support",
        paragraphs: [
          `For account access, app issues, subscriptions, deletion help, and general support, email ${legalConfig.supportEmail}.`,
        ],
      },
      {
        heading: "Privacy, safety, legal, and copyright",
        bullets: [
          `Privacy requests: ${legalConfig.privacyEmail}.`,
          `Safety and content-removal requests: ${legalConfig.safetyEmail}.`,
          `Legal notices: ${legalConfig.legalEmail}.`,
          `Copyright notices: ${legalConfig.dmcaEmail}.`,
          `Mailing address placeholder: ${legalConfig.mailingAddress}.`,
        ],
      },
      {
        heading: "Before launch",
        paragraphs: [
          "Replace these placeholder inboxes and the mailing address with monitored production contacts before publishing the website or submitting app-store metadata.",
        ],
      },
    ],
  },
};
