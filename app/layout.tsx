import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interfont = Inter({subsets: ["latin"], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-ibm-plex-serif",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMBank",
  description: "RMBank is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interfont.variable} ${ibmPlexSerif.variable}`}


      >
        {children}
      </body>
    </html>
  );
}
