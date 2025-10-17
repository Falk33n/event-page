import { SkipToMainContentTrigger } from "@/components/skip-to-main";
import type { ReactNode } from "react";
import { Footer, type FooterItem } from "./footer";
import { Navbar } from "./navbar";

type LayoutContentProps = {
  /** The title of the page, used for the document title. */
  title: string;

  /** The ID of the main generic section on the page (used for anchors). */
  genericSectionId: string;

  /** Footer links and contact information. */
  footer: FooterItem;

  /** Child components to render within the layout. */
  children: ReactNode;
};

export function LayoutContent({
  title,
  genericSectionId,
  footer,
  children,
}: LayoutContentProps) {
  return (
    <>
      <SkipToMainContentTrigger />
      <Navbar
        title={title}
        genericSectionId={genericSectionId}
      />
      <main
        aria-label="Main content"
        id="main-content"
      >
        {children}
      </main>
      <Footer
        title={title}
        footer={footer}
      />
    </>
  );
}
