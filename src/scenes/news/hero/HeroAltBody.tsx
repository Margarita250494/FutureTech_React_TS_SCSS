import { newsCardData } from "../newsData";
import { NewsCard } from "./NewsCard";

export const HeroAltBody = () => {
  return (
    <div className="hero-alt__body">
      <ul className="list">
        {newsCardData
          .filter((news) => news.isMain)
          .map((news) => (
            <li key={news.id} className="list__item">
              <NewsCard
                isMain={news.isMain}
                image={news.img}
                width={news.width}
                height={news.height}
                title={news.title}
                description={news.description}
                summary={news.summary}
                actions={news.actions}
              />
            </li>
          ))}
        <li className="list__item">
          <div className="news container">
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
        </li>
      </ul>
    </div>
  );
};
