import { HeroAltHeader } from "@/components/section/HeroAltHeader";
import { PodcastsBody } from "./PodcastsBody";

export const PodcastsSection = () => {
  return (
    <section className="hero-alt" aria-labelledby="podcast-title">
      <HeroAltHeader
        id="podcast-title"
        title="Unlock the World of Artificial Intelligence "
        spanTitle="through Podcasts"
        description="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."
      />
      <PodcastsBody/>
    </section>
  );
};
