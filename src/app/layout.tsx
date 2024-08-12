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
  metadataBase: new URL('https://castudio-rho.vercel.app'),
  title: "CA Studio",
  description: "Photography Agency",
  openGraph: {
    title: "CA Studio",
    description: "Photography Agency",
    url: "https://castudio-rho.vercel.app/",
    type: "website",
    images: [
      {
        url: "/CASTUDIO.png",
        width: 150,
        height: 150,
        alt: "CA Studio - Photography Agency",
      },
    ],
  },
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
