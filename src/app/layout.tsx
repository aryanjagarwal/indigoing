import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "IndiGoing",
   description: "Discover airlines and their flight status!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
         </body>
         <Analytics />
         <script defer src="https://cloud.umami.is/script.js" data-website-id="9a8d9bbd-3033-40df-8088-c336c1629ea5"></script>
      </html>
   );
}
