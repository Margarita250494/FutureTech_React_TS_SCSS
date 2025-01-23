import { CardCellExtra } from "./CardCell";
import { TileProps } from "@/shared/types";

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
          <div key={index} className={tile.className}>
            <h4 className="card__cell-subtitle">{tile.subtitle}</h4>
            <p className="card__cell-description subDescription h6">
              {tile.description}
            </p>
            {tile.link && (
              <a className="card__cell-link button" href={tile.link.href}>
                <span className="icon">
                  {tile.link.span}
                <img
                  className="icon--yellow-eye"
                  src={tile.link.icon}
                  alt=""
                />
                </span>
                
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};