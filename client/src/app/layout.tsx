import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReduxProvider } from "@/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FECA - Forum for Empowerment and Community Awareness",
  description:
    "Building peaceful and empowered communities through civic action, democratic innovation, and sustainable development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
