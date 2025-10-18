import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn } from "~/lib/utils";

type NavbarProps = {
  /** The title of the event, displayed in the navbar. */
  title: string;

  /** The ID of the main generic section on the page, used for navigation anchors. */
  genericSectionId: string;
};

export function Navbar({ title, genericSectionId }: NavbarProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <ul role="menubar" className="flex items-center gap-8">
          <NavbarListLink
            href="/"
            label={title}
            className="text-foreground font-medium"
          />
          <li role="menuitem">
            <ul role="menubar" className="hidden items-center gap-6 md:flex">
              <NavbarListLink href="#about" label="About" />
              <NavbarListLink href="#schedule" label="Schedule" />
              <NavbarListLink
                href={`#${genericSectionId}`}
                label={`${genericSectionId
                  .charAt(0)
                  .toUpperCase()}${genericSectionId.slice(1)}`}
              />
              <NavbarListLink href="#faq" label="FAQ" />
            </ul>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}

type NavbarListLinkProps = {
  /** The URL the link points to. */
  href: string;

  /** The visible text for the link. */
  label: string;

  /** Optional additional CSS classes to apply to the link. */
  className?: string;
};

function NavbarListLink({ href, label, className }: NavbarListLinkProps) {
  return (
    <li role="menuitem">
      <Link
        href={href}
        className={cn(
          "text-muted-foreground hover:text-foreground font-mono text-xs tracking-wider uppercase transition-colors hover:underline hover:underline-offset-2",
          className,
        )}
      >
        {label}
      </Link>
    </li>
  );
}
