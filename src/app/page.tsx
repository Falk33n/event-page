import eventData from "@/data/event-data.json";
import { About } from "./_components/about";
import { Faq } from "./_components/faq";
import { GenericSection } from "./_components/generic-section";
import { Hero } from "./_components/hero";
import { Schedule } from "./_components/schedule";

export default async function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Hero
        city={eventData.city}
        date={eventData.date}
        slogan={eventData.slogan}
        tickets={eventData.tickets}
        time={eventData.time}
        title={eventData.title}
        venue={eventData.venue}
      />
      <About
        about={eventData.about}
        additionalAbout={eventData.additionalAbout}
      />
      <Schedule schedule={eventData.schedule} />
      <GenericSection
        id={eventData["generic-section"].id}
        title={eventData["generic-section"].title}
        items={eventData["generic-section"].items}
      />
      <Faq faq={eventData.faq} />
    </div>
  );
}
