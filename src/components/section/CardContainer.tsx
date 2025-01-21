import { CardBody } from "./CardBody";
import { CardPreview } from "./CardPreview";
import { resourcesData } from "./data";

type Props = {
    resource: typeof resourcesData[0];
};
  
export const CardContainer = ({resource}: Props) => {
  return (
    <div className="card container">
      <CardPreview
        img={resource.icon}
        title={resource.title}
        description={resource.description}
        link={resource.link}
        className="card__preview-link button button--dark-gray"
        extra={resource.extra}
        people={resource.extra.images}
      />
      <CardBody
        title={resource.cardCellBigData.title}
        description={resource.cardCellBigData.description}
        src={resource.cardCellBigData.imageSrc}
        tiles={resource.cardCellBigData.tiles}
      />
    </div>
  );
};
