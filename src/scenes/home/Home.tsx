import { Title } from "@/components/Title"
import { Metrics } from "./Metrics"


//type Props = {}

export const Home = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__main container">
        <div className="hero__body">
          <p className="hero__subtitle">Your Journey to Tomorrow Begins Here</p>
          <Title
            classNameTitle="hero__title"
            id="hero-title"
            title="Explore the Frontiers of Artificial Intelligence"
            classNameDesc="hero__description"
            desc="Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."/>
        </div>
        <Metrics/>
        <div className="hero__resources-preview resources-preview">

        </div>
      </div>
      <div className="hero__adventages"></div>
    </section>
  )
}

