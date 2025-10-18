import type { Metadata } from "next";
import eventData from "~/data/event-data.json";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `${eventData.title}: ${eventData.slogan} | Signup`,
  };
};

export default function Signup() {
  return <></>;
}
