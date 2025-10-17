import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      className="top-0 right-0 left-0 z-50 fixed bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-7xl">
        <ul
          role="menubar"
          className="flex items-center gap-8"
        >
          <NavbarListLink
            href="/"
            label={title}
            className="font-medium text-foreground"
          />
          <li role="menuitem">
            <ul
              role="menubar"
              className="hidden md:flex items-center gap-6"
            >
              <NavbarListLink
                href="#about"
                label="About"
              />
              <NavbarListLink
                href="#schedule"
                label="Schedule"
              />
              <NavbarListLink
                href={`#${genericSectionId}`}
                label={`${genericSectionId
                  .charAt(0)
                  .toUpperCase()}${genericSectionId.slice(1)}`}
              />
              <NavbarListLink
                href="#faq"
                label="FAQ"
              />
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
          "font-mono text-muted-foreground hover:text-foreground text-xs hover:underline hover:underline-offset-2 uppercase tracking-wider transition-colors",
          className
        )}
      >
        {label}
      </Link>
    </li>
  );
}
