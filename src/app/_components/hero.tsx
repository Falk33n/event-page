import { Starfield } from "@/components/starfield";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TypographyH1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  ExternalLink,
  type LucideIcon,
  MapPin,
  Triangle,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type EventTicket = {
  /** The price of the ticket (e.g., "$50"). */
  price: string;

  /** Label or type of the ticket (e.g., "Early Bird", "VIP"). */
  label: string;

  /** URL to purchase or register for this ticket. */
  href: string;

  /** Optional discounted price if applicable. */
  discountedPrice?: string;
};

type HeroProps = {
  /** Title of the event. */
  title: string;

  /** Event slogan or tagline. */
  slogan: string;

  /** City where the event is held. */
  city: string;

  /** Venue name of the event location. */
  venue: string;

  /** Date of the event (e.g., "October 17, 2025"). */
  date: string;

  /** Time of the event (e.g., "6:00 PM - 12:00 AM"). */
  time: string;

  /** Array of available tickets for the event. */
  tickets: EventTicket[];
};

export function Hero({
  slogan,
  title,
  city,
  venue,
  date,
  tickets,
  time,
}: HeroProps) {
  return (
    <section
      aria-label="Hero section"
      className="relative flex justify-center items-center px-6 py-24 min-h-screen"
    >
      <Starfield />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative rounded-full size-80 sm:size-96">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 rounded-full animate-spin animation-duration-[5000ms]" />
          <div className="absolute inset-[4px] bg-background rounded-full" />
          <Triangle
            aria-hidden
            className="hidden sm:block top-1/2 left-1/2 absolute opacity-25 dark:opacity-10 size-32 text-muted-foreground -translate-1/2"
          />
        </div>
      </div>

      <div className="z-10 relative mx-auto w-full max-w-7xl">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div>
            <TypographyH1 className="mx-auto lg:mx-0 w-full lg:w-[unset] max-w-[550px] lg:max-w-[unset] font-medium text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
              {title}: {slogan}
            </TypographyH1>

            <ul className="flex flex-col items-center sm:items-start space-y-4 mx-auto lg:mx-0 mt-12 w-full lg:w-[unset] max-w-[550px] lg:max-w-[unset] font-mono text-sm">
              <HeroInfo
                icon={MapPin}
                label="Location"
              >
                <address className="mt-1 not-italic">{city}</address>
                <address className="text-muted-foreground not-italic">
                  {venue}
                </address>
              </HeroInfo>
              <HeroInfo
                icon={Calendar}
                label="Date"
              >
                <time className="mt-1">{date}</time>
              </HeroInfo>
              <HeroInfo
                icon={Clock}
                label="Time"
              >
                <time className="mt-1">{time}</time>
              </HeroInfo>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {tickets.map((ticket, i) => (
              <HeroAction
                key={ticket.href}
                index={i}
                ticket={ticket}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type HeroInfoProps = {
  /** The icon to display, imported from lucide-react. */
  icon: LucideIcon;

  /** Label text describing the information (e.g., "Date", "Location"). */
  label: string;

  /** The content to display alongside the label and icon. */
  children: ReactNode;
};

function HeroInfo({ icon: Icon, label, children }: HeroInfoProps) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        aria-hidden
        className="flex-shrink-0 mt-0.5 w-4 h-4"
      />
      <div>
        <div className="text-muted-foreground uppercase tracking-wider">
          {label}
        </div>
        {children}
      </div>
    </li>
  );
}

type HeroActionProps = {
  /** The ticket data associated with this action. */
  ticket: EventTicket;

  /** The index of the ticket in the tickets array, used for styling. */
  index: number;
};

function HeroAction({ ticket, index }: HeroActionProps) {
  return (
    <Card className="mx-auto lg:mx-0 w-full lg:w-[unset] max-w-[550px] lg:max-w-[unset]">
      <CardContent>
        <CardTitle>
          {ticket.discountedPrice && (
            <div className="flex justify-between items-center gap-2 font-mono font-normal text-muted-foreground text-xs uppercase tracking-wider">
              Original Price
              <span className="line-through">{ticket.price}</span>
            </div>
          )}
          <div className="flex justify-between items-center gap-2 mt-2 text-2xl">
            {ticket.label}
            <span>
              {ticket.discountedPrice ? ticket.discountedPrice : ticket.price}
            </span>
          </div>
        </CardTitle>
        <Link
          href={ticket.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Opens in a new tab"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: index % 2 === 0 ? "default" : "outline",
              className:
                "group mt-6 w-full font-mono text-xs uppercase tracking-wider",
            })
          )}
        >
          Get Tickets
          <ExternalLink
            aria-hidden
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </CardContent>
    </Card>
  );
}
