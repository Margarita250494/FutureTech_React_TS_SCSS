import { CardCellExtra } from "./CardCell";
import { TileProps } from "@/shared/types";
import { CardPreviewExtra } from "./CardPreviewExtra";

export const CardBody = ({
  title,
  description,
  src,
  tiles,
}: TileProps) => {
  return (
    <div className="card__body">
      <div className="card__grid card__grid--2-cols-alt">
        <CardCellExtra
          title={title}
          description={description}
          src={src}
          width="917"
          height="332"
        />
        {tiles.map((tile, index) => (
          <CardPreviewExtra
          key={index}
          bodyClassName={tile.className}
          subtitle={tile.subtitle}
          description={tile.description}
          eyeLink={!!tile.link}
          href={tile.link?.href || "#"}
          text={tile.link?.span || ""}
          src={tile.link?.icon || ""}
          />
        ))}
      </div>
    </div>
  );
};
