import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MERN Stack Developer Portfolio",
  description: "I am a driven and passionate MERN Stack Developer.",
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
