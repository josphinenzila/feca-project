"use client";

import { Inter } from "next/font/google";
import { SnackbarProvider } from "notistack";
import "./globals.css";

import { ReduxProvider } from "@/redux/providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {" "}
          <ReduxProvider>{children}</ReduxProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
