import { CardContainer } from "@/components/section/CardContainer";
import { resourcesData } from "@/components/section/data";
import { Header } from "@/components/section/Header";

export const ResourcesSection = () => {
  return (
    <section className="section" aria-labelledby="resources-title">
      <Header
        to="/resources"
        id="resources-title"
        subtitle="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        link="View All Resources"
      />
      <div className="section__body">
        <ul className="list">
          {resourcesData.map((resource, index) => (
            <li className="list__item" key={index}>
              <CardContainer resource={resource} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};