import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyond Inclusion — Book Launch | Dr. Tadiwanashe Muganyi",
  description:
    "Join us for the Africa Day launch of 'Beyond Inclusion: Fintech's AI Inflection Point' by Dr. Tadiwanashe Muganyi. 25 May 2026 · 10 on Pauling Hotel, Bulawayo · 10am–2pm.",
  icons: {
    icon: [{ url: "/book-cover.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/book-cover.jpeg", type: "image/jpeg" }],
    shortcut: "/book-cover.jpeg",
  },
  openGraph: {
    title: "Beyond Inclusion — Book Launch",
    description:
      "Africa Day Book Launch · 25 May 2026 · 10 on Pauling Hotel, Bulawayo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased" style={{ background: "#0a2a35" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
