import { LinkImgArrow } from "../LinkImgArrow";
import { Team } from "@/scenes/home/hero/Team";
import { CardPreviewProps } from "@/shared/types";
import { Description } from "./Description";

export const CardPreview = ({
  img,
  title,
  description,
  link,
  href,
  className,
  extra,
  people,
  h2,
  h3,
  h4,
  classNameH3
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
        <Description
        bodyClassName="card__preview-info"
        h3={h3}
        h2={h2}
        h4={h4}
        titleClassName={`card__preview-title ${h3 && "h3"} ${h4 && "h3"} ${classNameH3 && "h3"}`}
        title={title}
        descClassName="card__preview-description"
        desc={description}/>
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
