import { HeroAltHeader } from "@/components/section/HeroAltHeader"
import { HeroAltBody } from "./HeroAltBody"


export const HeroAltSection = () => {
  return (
    <section className="hero-alt" aria-labelledby="news-title">
      <HeroAltHeader
      id="news-title"
      title="Today's Headlines: Stay"
      spanTitle="Informed"
      description="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."/>
      <HeroAltBody/>
    </section>
  )
}

