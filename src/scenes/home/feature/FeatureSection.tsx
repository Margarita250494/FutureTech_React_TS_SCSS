import { SectionBody,Header } from "@/components/section/sectionImport";
import {featureSectionsData} from "@/components/section/data";

export const FeatureSection = () => {
  return (
    <section className="section" aria-labelledby="features-title">
      <Header
        to="/"
        id="features-title"
        subtitle="Unlock the Power of"
        title="FutureTech Features"
      />
      <div className="section__body">
        {featureSectionsData.map((feature, index) => (
          <SectionBody
            key={index}
            img={feature.img}
            title={feature.title}
            description={feature.description}
            className={feature.className}
            data={feature.data}
          />
        ))}
      </div>
    </section>
  );
};
