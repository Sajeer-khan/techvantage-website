import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "TechVantage Enterprise | HVAC, MEP & Industrial Solutions",
    template: "%s | TechVantage Enterprise",
  },
  description:
    "TechVantage Enterprise delivers HVAC, controlled-environment, MEP and industrial utility projects through equipment sourcing, installation, commissioning and handover.",
  keywords: [
    "HVAC contractor Karachi",
    "MEP contractor Pakistan",
    "pharmaceutical HVAC",
    "industrial ventilation",
    "cooling tower",
    "testing and commissioning",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    title: "TechVantage Enterprise | Engineering Clarity. Accountable Delivery.",
    description:
      "HVAC, controlled-environment, MEP and industrial solutions delivered from scope to handover.",
    siteName: "TechVantage Enterprise",
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body className="antialiased">{children}</body>
    </html>
  );
}
