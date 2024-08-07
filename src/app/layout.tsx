import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const ClientNavbar = dynamic(() => import("./components/navbarr"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "CA Studio",
  description: "Photography Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
