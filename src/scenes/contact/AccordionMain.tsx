import { CardPreview } from "@/components/section/CardPreview";
import icon2 from "@/assets/icons/contacts/1.svg";

export const AccordionMain = () => {
  return (
    <div className="list__item">
      <div className="card container">
        <CardPreview
          h2={true}
          title="Asked question"
          img={icon2}
          classNameH3={true}
          description="If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. "
          className="card__preview-link button button--dark-gray "
          link="Ask Question"
          href="/"
        />
        <div className="card__body">Not Form</div>
      </div>
    </div>
  );
};
