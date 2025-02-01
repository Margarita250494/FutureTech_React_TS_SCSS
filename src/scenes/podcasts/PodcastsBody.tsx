import { CardPreviewExtra,RatingViewStar,VideoCardPlayer } from "@/components/section/sectionImport";
import { podcasts } from "./data";

export const PodcastsBody = () => {
  if (!podcasts || podcasts.length === 0) {
    return <div className="hero-alt__body">No podcasts available.</div>;
  }

  return (
    <div className="hero-alt__body">
      <ul className="list">
        {podcasts.map((podcast, index) => (
          <li key={index} className="list__item">
            <div className="card container">
              <div className="card__preview">
                <div className="card__preview-main">
                  <img
                    src={podcast.icon}
                    alt=""
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                  <div className="card__preview-info">
                    <h2 className="card__preview-title h3">{podcast.title}</h2>
                    <RatingViewStar
                      rating={podcast.rating}
                      className="card__rating-view rating-view"
                    />
                  </div>
                  <CardPreviewExtra
                    arrowLink={true}
                    bodyClassName="card__preview-extra"
                    subtitle="Host"
                    description={podcast.host}
                    href="/"
                    arrowClassName="card__cell-link button"
                    text="Listen Podcast"
                    h3={true}
                  />
                </div>
              </div>
              <div className="card__body">
                <div className="card__grid card__grid--3-cols">
                  <div className="card__cell card__cell--wide">
                    <VideoCardPlayer
                      className="video-player"
                      width="917"
                      height="412"
                      video={podcast.video}
                      poster={podcast.poster}
                      isCenter={true}
                    />
                  </div>
                  <div className="card__cell card__cell--wide">
                    <h3 className="card__cell-title h4">
                      {podcast.cardCellTitle}
                    </h3>
                    <p className="card__cell-description">
                      {podcast.description}
                    </p>
                  </div>
                  {podcast.details.map((detail, index) => (
                    <div key={index} className="card__cell tile">
                      <p className="card__cell-title">{detail.title}</p>
                      <p className="card__cell-description h6">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
