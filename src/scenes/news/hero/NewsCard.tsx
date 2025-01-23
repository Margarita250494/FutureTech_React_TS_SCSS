import { LinkImgArrow } from "@/components/LinkImgArrow";
import { BlogActions } from "@/components/section/BlogActions";
import { NewsCardProps} from "@/shared/types";

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
      <div className="news-card__body">
        <h2 className={`news-card__title ${isMain ? "" : "h6"}`}>{title}</h2>
        <div className="news-card__description">
          <p>{description}</p>
        </div>
      </div>
      {summary ? (
        <div className="news-card__summary summary">
          <dl className="summary__list">
            {summary.map((item, index) => (
              <div key={index} className="summary__item">
                <dt className="summary__key">{item.key}</dt>
                <dd className="summary__value">
                  {item.isTime ? (
                    <time dateTime={item.datetime}>{item.value}</time>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
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
