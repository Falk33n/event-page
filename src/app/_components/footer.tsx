import Link from "next/link";

export type FooterItem = {
  /** URL to the privacy policy page. */
  privacyPolicyUrl: string;

  /** URL to the terms and conditions page. */
  termsAndConditionsUrl: string;

  /** Contact email for inquiries. */
  contactMail: string;
};

type FooterProps = {
  /** The main title or heading for the footer section. */
  title: string;

  /** Footer links and contact information. */
  footer: FooterItem;
};

export function Footer({ title, footer }: FooterProps) {
  return (
    <footer
      className="px-6 py-12 border-t"
      aria-label="Main Footer"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
          <p className="font-mono text-muted-foreground text-xs">
            © {new Date().getFullYear()} {title}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <FooterLink
              label="Privacy Policy"
              href={footer.privacyPolicyUrl}
            />
            <FooterLink
              label="Terms and Conditions"
              href={footer.termsAndConditionsUrl}
            />
            <FooterLink
              label="Contact"
              href={`mailto:${footer.contactMail}`}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  /** The display text for the footer link. */
  label: string;

  /** The URL the footer link points to. */
  href: string;
};

function FooterLink({ label, href }: FooterLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Opens in a new tab"
      className="font-mono text-muted-foreground hover:text-foreground text-xs hover:underline hover:underline-offset-2 transition-colors"
    >
      {label}
    </Link>
  );
}
