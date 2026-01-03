import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
import Provider from "./provider";

const appFont = DM_Sans({
  subsets: ['latin']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "UI UX Mock generator App",
  description: "Generated High qulity free UI UX Mobile and Web Mockup design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={appFont.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
