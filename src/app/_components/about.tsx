import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { Info } from "lucide-react";

type AboutProps = {
  /** Main description or overview of the event or subject. */
  about: string;

  /** Additional details, extended information, or secondary description. */
  additionalAbout: string;
};

export function About({ about, additionalAbout }: AboutProps) {
  return (
    <section
      aria-label="About section"
      id="about"
      className="px-6 py-24 border-t"
    >
      <div className="mx-auto max-w-4xl">
        <TypographyH2 className="flex items-center gap-2 font-mono font-normal text-muted-foreground text-xs uppercase tracking-wider">
          <Info
            aria-hidden
            className="size-4"
          />
          About the Event
        </TypographyH2>
        <TypographyP className="text-xl text-balance leading-relaxed">
          {about}
        </TypographyP>
        <TypographyP className="text-muted-foreground leading-relaxed">
          {additionalAbout}
        </TypographyP>
      </div>
    </section>
  );
}
