import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { CircleQuestionMark, PartyPopper } from "lucide-react";

type GenericSectionItem = {
  /** Optional name of the item (e.g., speaker name, image title). */
  name?: string;

  /** Optional subtitle or description (e.g., title, company, caption). */
  subtitle?: string;

  /** Optional image URL for the item. */
  image?: string;

  /** Optional alt text for the image, used for accessibility. */
  alt?: string;
};

type GenericSectionProps = {
  /** Unique identifier for the section, used for anchors or internal references. */
  id: string;

  /** Title or heading for the section. */
  title: string;

  /** Array of items to display within the section. */
  items: GenericSectionItem[];
};

export function GenericSection({ id, items, title }: GenericSectionProps) {
  return (
    <section
      aria-label={`${title} section`}
      id={id}
      className="px-6 py-24 border-t"
    >
      <div className="mx-auto max-w-6xl">
        <TypographyH2 className="flex items-center gap-2 font-mono font-normal text-muted-foreground text-xs uppercase tracking-wider">
          <PartyPopper
            aria-hidden
            className="size-4"
          />
          {title}
        </TypographyH2>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {items.map((item, i) => (
            <div
              key={item.name ?? item.image ?? `event-section-${i}`}
              className="group"
            >
              {item.image && (
                <GenericSectionImage
                  image={item.image}
                  alt={item.alt ?? item.name ?? "Event Image"}
                  name={item.name}
                />
              )}
              {item.name && (
                <>
                  <TypographyH3 className="mt-4 font-medium text-lg">
                    {item.name}
                  </TypographyH3>
                  {item.subtitle && (
                    <TypographyP className="[&:not(:first-child)]:mt-0 font-mono text-muted-foreground text-xs uppercase tracking-wider">
                      {item.subtitle}
                    </TypographyP>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type GenericSectionImageProps = {
  /** Image URL for the item. */
  image: string;

  /** Optional alt text for the image, used for accessibility. */
  alt?: string;

  /** Optional name of the item (e.g., speaker name, image title). */
  name?: string;
};

function GenericSectionImage({ image, alt, name }: GenericSectionImageProps) {
  return (
    <Avatar className="rounded-lg w-full h-[23.5rem]">
      <AvatarImage
        src={image}
        alt={alt ?? name ?? "Event Image"}
        draggable={false}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className="rounded-none size-full text-muted-foreground group-hover:scale-105 transition-transform"
      />
      <AvatarFallback className="relative rounded-none size-full font-medium text-foreground">
        <CircleQuestionMark
          aria-hidden
          className="top-1/2 left-1/2 absolute size-32 text-muted-foreground/15 -translate-1/2"
        />
        Image Missing
      </AvatarFallback>
    </Avatar>
  );
}
