import { CardPreview } from "@/components/section/CardPreview";
import icon1 from "@/assets/icons/contacts/1.svg"


export const FormMain = () => {
  return (
    <div className="list__item">
      <div className="card container">
        <CardPreview
          h2={true}
          title="Get in Touch with AI Podcasts"
          img={icon1}
        />
        <div className="card__body">Form</div>
      </div>
    </div>
  );
};
