import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kelola | Maximize your Productivity",
    template: "%s | Kelola",
  },
  description:
    "Kelola is an AI-powered template marketplace SaaS that helps teams collaborate, plan, and execute with precision scheduling and 10,000+ ready-to-use templates.",
  openGraph: {
    type: "website",
    siteName: "Kelola",
    title: "Kelola | Maximize your Productivity",
    description:
      "AI-powered template marketplace SaaS for teams to collaborate, plan, and execute with precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelola | Maximize your Productivity",
    description:
      "AI-powered template marketplace SaaS for teams to collaborate, plan, and execute with precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} dark h-full antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
