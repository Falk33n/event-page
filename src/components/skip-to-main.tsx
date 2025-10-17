import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function SkipToMainContentTrigger() {
  return (
    <Link
      href="#main-content"
      className={buttonVariants({
        className:
          "fixed z-[100] -left-[300px] top-0 rounded-l-none focus-visible:left-0",
      })}
    >
      Skip to main content
    </Link>
  );
}
