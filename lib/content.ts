// Single source of truth for event copy.

export const REGISTER_URL = "https://forms.gle/6AkKfiuNqhf68jbi6";

// Registration deadline: 1 Nov 2026, 9:00 PM IST.
export const REGISTRATION_DEADLINE = Date.UTC(2026, 10, 1, 15, 30, 0);

export const details = [
  { big: "Nov 2 & 6", small: "2026" },
  { big: "3–5", small: "Members Per Team" },
  { big: "3 Tracks", small: "Revealed on the day" },
  { big: "1st & 2nd", small: "Years Only" },
];

export const stages = [
  {
    title: "Registrations Close",
    blurb: "Gather your team of 3–5 and sign up",
    when: ["Nov 1", "9 PM"],
    tone: "rose",
  },
  {
    title: "Round 1 · Ideate & Build",
    blurb: "Briefing, problem statements and an elimination round",
    when: ["Nov 2"],
    tone: "teal",
  },
  {
    title: "Round 2 · Develop & Present",
    blurb: "Present to the industry panel",
    when: ["Nov 6"],
    tone: "peri",
  },
] as const;

export const prizes = [
  { place: "2nd", amount: "₹2,500", desc: "Second Prize" },
  { place: "1st", amount: "₹3,500", desc: "First Prize", featured: true },
  { place: "3rd", amount: "₹2,000", desc: "Third Prize" },
];

export const benefits = [
  {
    title: "₹8,000 Prize Pool",
    body: "The top three teams take home ₹3,500, ₹2,500 and ₹2,000.",
  },
  {
    title: "Beginner Friendly",
    body: "No prior hackathon experience required. Bring your curiosity, creativity and willingness to learn.",
  },
  {
    title: "Industry Experts as Judges",
    body: "Present your solution to industry professionals and get valuable feedback.",
  },
  {
    title: "Hands-On & Networking",
    body: "Ideate, build, test and refine a proof of concept, and connect with industry professionals along the way.",
  },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "SNUC miniHacks 2026 is open exclusively to 1st and 2nd year students at Shiv Nadar University Chennai.",
  },
  {
    q: "How big can a team be?",
    a: "Each team must have 3–5 participants.",
  },
  {
    q: "I've never done a hackathon. Can I still join?",
    a: "Yes. No prior hackathon experience is required. miniHacks is designed to help you take your first step into hackathons.",
  },
  {
    q: "How does the event work?",
    a: "Round 1 (Ideate & Build) is on 2 November: the briefing and problem statements are shared on the day, teams build a proof of concept, and an elimination round decides who advances. In Round 2 (Develop & Present) on 6 November, shortlisted teams develop their solutions further and present to a panel of industry experts.",
  },
  {
    q: "What are the tracks?",
    a: "There are three challenge tracks. They'll be announced on the day of the event.",
  },
  {
    q: "Where is it happening?",
    a: "The venue and additional event details will be communicated soon.",
  },
  {
    q: "When does registration close?",
    a: "1 November 2026, 9:00 PM.",
  },
];

export const contacts = [
  { name: "Srivatchan G V", phone: "9342548083" },
  { name: "Ammog Warrier", phone: "8590556006" },
  { name: "Venkat", phone: "7338978082" },
  { name: "Surya", phone: "9940537699" },
  { name: "Vijayan", phone: "8080323242" },
  { name: "Niranjhan SU", phone: "8122152806" },
  { name: "Prajesh Raam", phone: "9489687324" },
  { name: "Saran", phone: "7845911865" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/snuc_cc/";
