import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";
import { ThemeProvider } from "~/components/theme-provider";
import eventData from "~/data/event-data.json";
import "~/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `${eventData.title}: ${eventData.slogan}`,
    description: `${eventData.about} ${eventData.additionalAbout}`,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    keywords: [
      "event",
      "conference",
      "workshop",
      "networking",
      "tickets",
      eventData.city,
      eventData.venue,
    ],
    authors: [{ name: "Event Organizer" }],
    creator: "Event Organizer",
    publisher: "Event Organizer",
    metadataBase: new URL("https://yourdomain.com/"), // replace with actual domain
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${eventData.title}: ${eventData.slogan}`,
      description: `${eventData.about} ${eventData.additionalAbout}`,
      type: "website",
      url: "https://yourdomain.com/",
      siteName: eventData.title,
      images: [
        {
          url: "/og-image.png", // placeholder, replace with your OG image
          width: 1200,
          height: 630,
          alt: `${eventData.title} banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${eventData.title}: ${eventData.slogan}`,
      description: `${eventData.about} ${eventData.additionalAbout}`,
      images: ["/og-image.png"], // placeholder
      creator: "@your_twitter", // optional
    },
  };
};

type RootLayoutProps = {
  /** Child components to render within the layout. */
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
