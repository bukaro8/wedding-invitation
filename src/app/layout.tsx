import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://invitation.vicstack.uk"),
  title: "Joselin y Wilmer | Invitación de boda",
  description: "Invitación digital de boda.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Joselin y Wilmer | Invitación de boda",
    description: "Invitación digital de boda.",
    url: "https://invitation.vicstack.uk",
    siteName: "Joselin y Wilmer",
    images: [
      {
        url: "/og/wedding-preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Joselin y Wilmer | Invitación de boda",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joselin y Wilmer | Invitación de boda",
    description: "Invitación digital de boda.",
    images: ["/og/wedding-preview.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
