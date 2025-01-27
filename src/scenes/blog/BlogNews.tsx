import { LinkImgArrow } from "@/components/LinkImgArrow";
import { NewsCard } from "../news/hero/NewsCard";
import { newsCardData } from "../news/newsData";

export const BlogNews = () => {
  return (
    <div className="blog-details__news news container">
      <header className="news__header">
        <h2 className="news__title h4">Similar News</h2>
        <LinkImgArrow href="/news" className="news__link button" children="View All News"/>
      </header>
      <ul className="news__list">
        {newsCardData
          .filter((news) => !news.isMain)
          .map((news) => (
            <li key={news.id} className="news__item">
              <NewsCard
                isMain={news.isMain}
                image={news.img}
                width={news.width}
                height={news.height}
                title={news.title}
                description={news.description}
                actions={news.actions}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
