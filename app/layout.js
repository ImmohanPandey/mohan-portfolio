import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Mohan Pandey | Full Stack & Mobile Developer",

  description:
    "Full Stack Developer specializing in React, Flutter, FastAPI, PostgreSQL, MongoDB and cloud technologies.",

  keywords: [
    "React Developer",
    "Flutter Developer",
    "Full Stack Developer",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
  ],
};
