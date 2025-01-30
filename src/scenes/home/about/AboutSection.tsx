import logo from "@/assets/images/about/Logo.svg";
import { AboutList } from "./AboutList";
import { Intro } from "@/components/section/Intro";

export const AboutSection = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <header className="about__header">
          <img
            src={logo}
            alt=""
            className="about__icon"
            width="150"
            height="150"
            loading="lazy"
          />
          <Intro
          divClassName="about__info"
          reverse={true}
          pClassName="about__subtitle tag"
          intro="Learn, Connect, and Innovate"
          h2ClassName="about__title"
          id="about-title"
          title="Be Part of the Future Tech Revolution"/>
          <div className="about__description">
            <p>
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </header>
        <AboutList />
      </div>
    </section>
  );
};
