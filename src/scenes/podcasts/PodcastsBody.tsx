import icon1 from "@/assets/icons/podcasts/1.svg";
import { CardPreviewExtra } from "@/components/section/CardPreviewExtra";
import { RatingViewStar } from "@/components/section/RatingViewStar";
import { VideoCardPlayer } from "@/components/section/VideoCardPlayer";
import video from "@/assets/video/SampleVideo_1280x720_1mb.mp4";
import poster1 from "@/assets/images/podcasts/poster1.jpg";

const test = [
  {
    rating: 5,
  },
];

export const PodcastsBody = () => {
  return (
    <div className="hero-alt__body">
      <ul className="list">
        <li className="list__item">
          <div className="card container">
            <div className="card__preview">
              <div className="card__preview-main">
                <img src={icon1} alt="" width="80" height="80" loading="lazy" />
                <div className="card__preview-info">
                  <h2 className="card__preview-title h3">AI Revolution</h2>
                  <RatingViewStar
                    rating={test[0].rating}
                    className="card__rating-view rating-view"
                  />
                </div>
                <CardPreviewExtra
                  arrowLink={true}
                  bodyClassName="card__preview-extra"
                  subtitle="Host"
                  description="Dr. Sarah Mitchell"
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
                    video={video}
                    poster={poster1}
                    isCenter={true}
                  />
                </div>
                <div className="card__cell card__cell--wide">
                  <h3 className="card__cell-title h4">
                    Delves into the transformative impact of AI
                  </h3>
                  <p className="card__cell-description">
                    Join Dr. Sarah Mitchell as she delves into the
                    transformative impact of AI on industries, featuring expert
                    interviews and real-world case studies. Explore the
                    possibilities of AI in healthcare, finance, and more.
                  </p>
                </div>
                <div className="card__cell tile">
                  <p className="card__cell-title">Total Episodes</p>
                  <p className="card__cell-description h6">50</p>
                </div>
                <div className="card__cell tile">
                  <p className="card__cell-title">Average Episode Length</p>
                  <p className="card__cell-description h6">30 min</p>
                </div>
                <div className="card__cell tile">
                  <p className="card__cell-title">Release Frequency</p>
                  <p className="card__cell-description h6">Weekly</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
