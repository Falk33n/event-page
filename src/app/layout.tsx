import { ThemeProvider } from "@/components/theme-provider";
import eventData from "@/data/event-data.json";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";
import { LayoutContent } from "./_components/layout-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${eventData.title}: ${eventData.slogan}`,
  description: `${eventData.about} ${eventData.additionalAbout}`,
};

type RootLayoutProps = {
  /** Child components to render within the layout. */
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          <LayoutContent
            title={eventData.title}
            genericSectionId={eventData["generic-section"].id}
            footer={{
              contactMail: eventData.footer["contact-mail"],
              privacyPolicyUrl: eventData.footer["privacy-policy-url"],
              termsAndConditionsUrl:
                eventData.footer["terms-and-conditions-url"],
            }}
          >
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
