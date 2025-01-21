import { BlogCardProps } from "@/shared/types";
import { PersonCard } from "./PersonCard";
import { BlogActions } from "./BlogActions";
import { LinkImgArrow } from "../LinkImgArrow";

export const BlogCard = ({
  author,
  dateTime,
  date,
  title,
  description,
  actions
}: BlogCardProps) => {
  return (
    <article className="blog-card container">
      <div className="blog-card__author person-card">
      <PersonCard 
        imageSrc={author.imageSrc}
        name={author.name}
        department={author.department}
        width="80"
        height="80"
      />
      </div>
      <div className="blog-card__body">
        <time dateTime={dateTime} className="blog-card__date h6">
          {date}
        </time>
        <div className="blog-card__info">
          <h4 className="blog-card__title">{title}</h4>
          <div className="blog-card__description">
            <p>
              {description}
            </p>
          </div>
        </div>
        <BlogActions actions={actions}/>
      </div>
      <LinkImgArrow
        href="/"
        className="blog-card__link button"
        children="Read more"
      />
    </article>
  );
};
