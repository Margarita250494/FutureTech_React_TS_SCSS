import { BlogCardProps } from "@/shared/types";
import { LinkImgArrow } from "../LinkImgArrow";
import { Description, PersonCard,BlogActions } from "./sectionImport";

export const BlogCard = ({
  author,
  dateTime,
  date,
  title,
  description,
  actions,
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
        <Description
          bodyClassName="blog-card__info"
          h4={true}
          titleClassName="blog-card__title"
          title={title}
          descClassName="blog-card__description"
          desc={description}
        />
        <div className="blog-card__actions actions">
          <BlogActions actions={actions} />
        </div>
      </div>
      <LinkImgArrow
        href="/"
        className="blog-card__link button"
        children="Read more"
      />
    </article>
  );
};
