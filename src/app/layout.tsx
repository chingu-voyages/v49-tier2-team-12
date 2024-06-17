import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header/header";
import Footer from "@/app/_components/Footer/footer";
import {roboto} from "@/app/fonts/font";


export const metadata: Metadata = {
  title: "Color Ai explorer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
            <header className="fixed w-full z-20">
              <Header/>
            </header>
            <main className="py-20">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
      </body>
    </html>
  );
}
