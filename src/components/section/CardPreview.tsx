import { LinkImgArrow } from "../LinkImgArrow";
import { Team } from "@/scenes/home/hero/Team";
import { CardPreviewProps } from "@/shared/types";

export const CardPreview = ({
  img,
  title,
  description,
  link,
  href,
  className,
  extra,
  people,
}: CardPreviewProps) => {
  return (
    <div className="card__preview">
      <div className="card__preview-main">
        <img
          src={img}
          alt="/"
          className="card__preview-icon"
          width="80"
          height="80"
          loading="lazy"
        />
        <div className="card__preview-info">
          <h3 className="card__preview-title">{title}</h3>
          <div className="card__preview-description">
            <p>{description}</p>
          </div>
        </div>
        {link ? (
          <LinkImgArrow
            href={href || "#"}
            className={className || ""}
            children={link}
          />
        ) : (
          ""
        )}
      </div>
      {extra && people ? (
        <div className="card__preview-extra">
          <div className="download-info tile">
            <div className="download-info__body">
              <p className="download-info__title">{extra.subTitle}</p>
              <p className="download-info__subtitle h5">
                {extra.subDescription}
              </p>
            </div>
            <Team classname="download-info__team team" people={people} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
