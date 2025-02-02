import { HeroAltHeader } from "@/components/section/HeroAltHeader"
import { Metrics } from "../home/hero/Metrics"



export const ResHeroSection = () => {
  return (
    <section className="hero-alt" aria-labelledby="resources-title">
        <HeroAltHeader
        id="resources-title"
        title="Unlock a World of"
        spanTitle="Knowledge"
        description="Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."/>
        <div className="hero-alt__body">
            <Metrics className="metrics--4-cols container" h2={true}/>
        </div>
    </section>
  )
}

