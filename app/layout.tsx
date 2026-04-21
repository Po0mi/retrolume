import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/global.scss";
import Navbar from "@/layouts/Navbar";
import SmoothScroll from "@/layouts/SmoothScroll";

// 1. Load Google Fonts
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

// 2. Load Local Fonts (Hatton & Boska)
// ⚠️ IMPORTANT: These files MUST be located in: app/fonts/
const hatton = localFont({
  src: [
    { path: "./fonts/PP Hatton Ultralight 200.otf", weight: "200" },
    { path: "./fonts/PP Hatton Medium 500.otf", weight: "500" },
    { path: "./fonts/PP Hatton Bold 700.otf", weight: "700" },
  ],
  variable: "--font-hatton",
  display: "swap",
});

const boska = localFont({
  src: [
    { path: "./fonts/Boska-Extralight.otf", weight: "200" },
    { path: "./fonts/Boska-Light.otf", weight: "300" },
    { path: "./fonts/Boska-Regular.otf", weight: "400" },
    { path: "./fonts/Boska-Medium.otf", weight: "500" },
    { path: "./fonts/Boska-Bold.otf", weight: "700" },
    { path: "./fonts/Boska-Black.otf", weight: "900" },
    // Italics
    {
      path: "./fonts/Boska-Extralightitalic.otf",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Boska-Lightitalic.otf", weight: "300", style: "italic" }, // ✅ Fixed missing slash here
    { path: "./fonts/Boska-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/Boska-Mediumitalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/Boska-Bolditalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/Boska-Blackitalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-boska",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retrolume | Instax Printing Service",
  description:
    "Turn your favorite moments into tangible keepsakes you can hold, share, and treasure forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hatton.variable} ${boska.variable} ${lato.variable}`}
    >
      <body className="font-body">
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
