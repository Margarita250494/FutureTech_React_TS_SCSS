import { Title,Metrics,Team,LinkImgArrow,AdvantagesCard } from "@/components/section/sectionImport";
import { team } from "../homeData";

export const HeroSection = () => {
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
            desc="Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."
          />
        </div>
        <Metrics className="hero__metrics full-vw-line full-vw-line--top full-vw-line--left"/>
        <div className="hero__resources-preview resources-preview">
          <Team 
          classname="resources-preview__team team" people={team}/>
          <div className="resources-preview__body">
            <p className="resources-preview__title h5">
              Explore 1000+ resources
            </p>
            <p className="resources-preview__subtitle">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
          </div>
          <LinkImgArrow href="/resources" className="resources-preview__button button">
            Explore Resources
          </LinkImgArrow>
        </div>
      </div>
      <div className="hero__advantages">
        <h2 className="visually-hidden">Our Advantages</h2>
        <AdvantagesCard />
      </div>
    </section>
  );
};
