import { CircleQuestionMark } from "lucide-react";
import { Starfield } from "~/components/starfield";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "~/components/ui/typography";

type FaqItemProps = {
  /** The FAQ question text. */
  question: string;

  /** The answer text for the FAQ question. */
  answer: string;
};

type FaqProps = {
  /** An array of frequently asked questions. */
  faq: FaqItemProps[];
};

export function Faq({ faq }: FaqProps) {
  return (
    <section
      aria-label="Frequently asked questions section"
      id="faq"
      className="relative px-6 py-24 border-t"
    >
      <Starfield />
      <div className="z-10 relative bg-background mx-auto max-w-4xl">
        <TypographyH2 className="flex items-center gap-2 font-mono font-normal text-muted-foreground text-xs uppercase tracking-wider">
          <CircleQuestionMark
            aria-hidden
            className="size-4"
          />
          Frequently Asked Questions
        </TypographyH2>
        <div className="space-y-8 mt-12">
          {faq.map((item) => (
            <FaqItem
              key={item.question}
              answer={item.answer}
              question={item.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ answer, question }: FaqItemProps) {
  return (
    <div className="pl-6 hover:border-foreground border-border border-l-2 transition-colors">
      <TypographyH3
        className="font-medium text-lg"
        aria-label="Question"
      >
        {question}
      </TypographyH3>
      <TypographyP
        className="[&:not(:first-child)]:mt-2 text-muted-foreground"
        aria-label="Answer"
      >
        {answer}
      </TypographyP>
    </div>
  );
}
