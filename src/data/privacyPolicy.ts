/**
 * Privacy policy content.
 *
 * Written to describe what this site ACTUALLY does, not from a template. Every
 * statement below is checkable against the code:
 *
 *  - the estimate form posts to Netlify Forms (index.html form stub + the
 *    handler in App.tsx), so Netlify receives and stores submissions
 *  - fonts load from fonts.googleapis.com (index.html), which means Google
 *    sees visitor IP addresses
 *  - netlify/functions/reviews.mjs calls Google's Places API server-side and
 *    sends no visitor data
 *  - there is no analytics, no advertising pixel, and the site sets no cookies
 *    of its own — the CRM and its localStorage token were removed in
 *    August 2026
 *
 * A boilerplate policy describing cookies this site does not set would be
 * inaccurate, and an inaccurate privacy policy is worse than a short honest
 * one. If analytics or a chat widget is ever added, this file must change in
 * the same commit.
 *
 * Edwin should read this once and confirm he is happy with it. It is a
 * statement about how the business handles customer data, not marketing copy.
 */

export type PolicySection = {
  heading: string;
  body: string[];
  /** Optional bullet list rendered under the paragraphs. */
  list?: string[];
};

/** Change this only when the policy itself changes. */
export const privacyLastUpdated = "2026-08-10";

export const privacySections: PolicySection[] = [
  {
    heading: "The short version",
    body: [
      "We collect what you send us through the estimate form or by email, and we use it to get back to you about painting your property. We don't sell it, we don't trade it, and we don't send marketing to people who didn't ask for it.",
      "This site has no analytics, no advertising trackers, and sets no cookies of its own.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Only what you choose to give us. The estimate form asks for:",
    ],
    list: [
      "Your name",
      "Your email address",
      "Your phone number, if you provide one",
      "The type of project you're asking about",
      "Whatever you write in the message box",
    ],
  },
  {
    heading: "What we do with it",
    body: [
      "We use it to reply to you, arrange a walkthrough, and put together an estimate. If you become a customer, we keep it so we can carry out the work and stay in touch about it.",
      "We don't sell or rent your details to anyone, and we don't pass them to other companies for their own marketing.",
    ],
  },
  {
    heading: "Who else is involved",
    body: [
      "Two companies handle data on our behalf simply because of how the website runs:",
    ],
    list: [
      "Netlify hosts this site and receives your form submissions. Like any web host, its servers also log ordinary request information such as IP addresses.",
      "Google serves the fonts this site uses, which means Google receives your IP address when a page loads. We also show our Google reviews, but that information travels from Google to our server, not from you to Google.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that don't turn into work are kept while they might still be useful and then deleted. Customer records are kept longer, because we need them for our business and tax records.",
      "If you'd rather we deleted your details, just ask and we will.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This is a painting company's website. It isn't aimed at children and we don't knowingly collect information from them.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle your information, we'll update this page and the date at the top of it.",
    ],
  },
];
