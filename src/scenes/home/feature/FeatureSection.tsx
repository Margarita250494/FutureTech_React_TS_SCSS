import { Header } from "@/components/section/Header";
import { SectionBody } from "@/components/section/SectionBody";
import {featureSectionsData} from "@/components/section/data";

export const FeatureSection = () => {
  return (
    <section className="section" aria-labelledby="features-title">
      <Header
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
