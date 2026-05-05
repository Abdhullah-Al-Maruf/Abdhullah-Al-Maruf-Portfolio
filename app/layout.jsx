import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdhullah Al Maruf | MERN Stack Developer | Full Stack Web Developer",
  description: "Passionate MERN Stack Developer specializing in building scalable, high-performance web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Abdhullah Al Maruf",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Bangladesh Web Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Abdhullah Al Maruf" }],
  creator: "Abdhullah Al Maruf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maruf-dev-portfolio.vercel.app/",
    title: "Abdhullah Al Maruf | MERN Stack Developer Portfolio",
    description: "Explore the professional portfolio of Abdhullah Al Maruf, a MERN Stack Developer dedicated to creating elegant and efficient web solutions.",
    siteName: "Abdhullah Al Maruf Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdhullah Al Maruf | MERN Stack Developer",
    description: "Passionate MERN Stack Developer building the future of the web.",
    creator: "@AbdhullahAlMaruf", // Replace with actual handle if different
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-brand-red selection:text-white relative bg-[#030303] text-[#e5e5e5] overflow-x-hidden`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
