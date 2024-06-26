import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TigerTastic Family Daycare",
  description: "A family daycare that provides a safe, nurturing, and educational environment for children.",
  keywords: "childcare, daycare, preschool, early childhood education, TigerTastic Family Daycare",
  openGraph: {
    title: "TigerTastic Family Daycare",
    description: "A family daycare that provides a safe, nurturing, and educational environment for children.",
    type: "website",
    siteName: "TigerTastic Family Daycare",
    url: "https://tigerTasticFamilyDaycare.com",

    images: [
      {
        url: "https://tigerTasticFamilyDaycare.com/img5.jpg",
        width: 500,
        height: 500,
        alt: "TigerTastic Family Daycare",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="relative overflow-hidden">
          {children}
        </main>
        
        <Footer />
        </body>
    </html>
  );
}
