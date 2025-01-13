import { Header } from "@/components/section/Header";
import { SectionBody } from "@/components/section/SectionBody";
import {futureTechnologyBlog, researchInsightsBlogs} from '@/components/section/data'

import icon1 from "@/assets/icons/feature/1.svg"
import icon2 from "@/assets/icons/feature/2.svg"

export const FeatureSection = () => {
  return (
    <section className="section" aria-labelledby="features-title">
      <Header
        id="features-title"
        subtitle="Unlock the Power of"
        title="FutureTech Features"
      />
      <div className="section__body">
        <SectionBody
          img={icon1}
          title="Future Technology Blog"
          description="Stay informed with our blog section dedicated to future technology."
          className="card__grid--2-cols"
          data={futureTechnologyBlog}
        />
        <SectionBody
          img={icon2}
          title="Research Insights Blogs"
          description="Dive deep into future technology concepts with our research section."
          className="card__grid--2-cols"
          data={researchInsightsBlogs}
        />
      </div>
    </section>
  );
};
