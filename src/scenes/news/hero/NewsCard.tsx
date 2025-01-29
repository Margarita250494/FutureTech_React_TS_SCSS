import { LinkImgArrow } from "@/components/LinkImgArrow";
import { BlogActions, Description, SummaryList } from "@/components/section/sectionImport";
import { NewsCardProps } from "@/shared/types";

export const NewsCard = ({
  isMain,
  image,
  width,
  height,
  title,
  description,
  summary,
  actions,
}: NewsCardProps) => {
  return (
    <article className={`news-card ${isMain ? "container" : ""}`}>
      <img
        src={image}
        alt=""
        className="news-card__image"
        width={width}
        height={height}
        loading="lazy"
      />
      <Description
        bodyClassName="news-card__body"
        h2={true}
        titleClassName={`news-card__title ${isMain ? "" : "h6"}`}
        title={title}
        descClassName="news-card__description"
        desc={description}
      />
      {summary ? (
        <div className="news-card__summary summary">
          <SummaryList items={summary} />
        </div>
      ) : (
        ""
      )}
      <div className="news-card__controls">
        <div className="news-card__actions blog-actions">
          <BlogActions actions={actions} />
        </div>
        {isMain ? (
          <a href="/" className="news-card__link button">
            Read More
          </a>
        ) : (
          <LinkImgArrow
            href="/"
            className="news-card__link button"
            children="Read More"
          />
        )}
      </div>
    </article>
  );
};
