import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import InitialLoader from "@/components/InitialLoader";
import "./globals.css";

// Garet (Spacetype) — only the free Book and Heavy cuts. Intermediate
// weights (500–700) resolve to the nearest of the two.
const garet = localFont({
  variable: "--font-body",
  src: [
    { path: "./fonts/Garet-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Garet-Heavy.woff2", weight: "800", style: "normal" },
  ],
});

// Hero wordmark only. Stand-in for Heading Now 91–98, which isn't free to
// embed (its free trial is personal-use only and omits that range).
const montserrat = Montserrat({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "SNUC miniHacks 2026",
  description:
    "A beginner-friendly hackathon exclusively for 1st and 2nd years at Shiv Nadar University Chennai. Nov 2 & 6, 2026. ₹8,000 prize pool, judged by industry experts.",
};

export const viewport: Viewport = {
  themeColor: "#f3efec",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${garet.variable} ${montserrat.variable}`}>
      <body>
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
