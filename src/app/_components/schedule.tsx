import { Starfield } from "@/components/starfield";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Clock } from "lucide-react";

type EventSchedule = {
  /** The time for this schedule item (e.g., "6:00 PM - 7:00 PM"). */
  time: string;

  /** Title of the scheduled item (e.g., "Opening Keynote"). */
  title: string;

  /** Description of the scheduled item, providing more details. */
  description: string;
};

type ScheduleProps = { schedule: EventSchedule[] };

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <section
      aria-label="Schedule section"
      id="schedule"
      className="relative px-6 py-24 border-t"
    >
      <Starfield />
      <div className="z-10 relative bg-background mx-auto max-w-4xl">
        <TypographyH2 className="flex items-center gap-2 font-mono font-normal text-muted-foreground text-xs uppercase tracking-wider">
          <Clock
            aria-hidden
            className="size-4"
          />
          Schedule
        </TypographyH2>
        <div className="space-y-8 mt-12">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group sm:flex gap-8 pl-6 hover:border-foreground border-border border-l-2 transition-colors"
            >
              <time className="flex-shrink-0 w-24 font-mono text-muted-foreground group-hover:text-foreground text-sm transition-colors">
                {item.time}
              </time>
              <div className="flex-1">
                <TypographyH3 className="font-medium text-xl">
                  {item.title}
                </TypographyH3>
                <TypographyP className="[&:not(:first-child)]:mt-1 text-muted-foreground">
                  {item.description}
                </TypographyP>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
