import type { Metadata } from "next";
import eventData from "~/data/event-data.json";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `${eventData.title}: ${eventData.slogan} | Login`,
  };
};

export default function Login() {
  return <></>;
}
