import { CardExtraProps, CardProps } from "@/shared/types";

export const CardCell = ({ data }: CardProps) => {
  return (
    <div className="card__cell tile">
      {data.title && <h4 className="card__cell-title h5">{data.title}</h4>}
      {data.description && (
        <p className="card__cell-description">{data.description}</p>
      )}
    </div>
  );
};

export const CardCellExtra = ({ title, description, src, width, height }: CardExtraProps) => {
  return (
    <>
      <div className="card__cell">
        <h3 className="card__cell-title h5">{title}</h3>
      </div>

      <div className="card__cell">
        <p className="card__cell-description">{description}</p>
      </div>

      <div className="card__cell card__cell--wide">
        <img
          className="card__cell-image"
          src={src}
          alt=""
          width={width}
          height={height}
          loading="lazy"
        />
      </div>
    </>
  );
};
