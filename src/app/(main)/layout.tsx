import type { ReactNode } from "react";
import eventData from "~/data/event-data.json";
import { MainLayoutContent } from "./_components/layout-content";

type MainLayoutProps = {
  /** Child components to render within the layout. */
  children: ReactNode;
};

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <MainLayoutContent
      title={eventData.title}
      genericSectionId={eventData["generic-section"].id}
      footer={{
        contactMail: eventData.footer["contact-mail"],
        privacyPolicyUrl: eventData.footer["privacy-policy-url"],
        termsAndConditionsUrl: eventData.footer["terms-and-conditions-url"],
      }}
    >
      {children}
    </MainLayoutContent>
  );
}
