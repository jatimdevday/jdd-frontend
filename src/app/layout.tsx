import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Jost } from "next/font/google";
import "./globals.css";

const jkt = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jkt" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Jatim Developer Day",
  description: "Membangun Ekosistem IT di Jawa Timur Melalui Komunitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jkt.variable} ${jost.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
