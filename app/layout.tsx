import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import ThemeProvider from "./lib/providers/ThemeProvider";
import { patrick_hand } from "./lib/fonts";
import BackgroundTransition from "./components/Background";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Federico's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${patrick_hand.className}`}>
        <ThemeProvider>
          <BackgroundTransition />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
