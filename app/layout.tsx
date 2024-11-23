import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "smokinisbad",
  description: "stay healthy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <main className="flex-grow overflow-auto">{children}</main>
        <footer className="py-2 text-center bg-black fixed bottom-0 left-0 right-0">
          <div className="text-white space-x-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
