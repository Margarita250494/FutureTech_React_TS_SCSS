import { reviewsData } from "@/components/section/data";
import { PersonCard, RatingViewStar } from "@/components/section/sectionImport";

export const ReviewsBody = () => {
  return (
    <div className="section__body">
      <ul className="bordered-grid bordered-grid--3-cols container">
        {reviewsData.map((review) => (
          <li key={review.name} className="bordered-grid__item">
            <div className="review-card">
              <div className="review-card__author person-card">
                <PersonCard
                  imageSrc={review.img}
                  width="60"
                  height="60"
                  name={review.name}
                  department={review.department}
                />
              </div>
              <div className="review-card__body tile">
                <RatingViewStar rating={review.rating} className="review-card__rating-view rating-view"/>
                <blockquote className="review-card__description">
                  <p>{review.blockquote}</p>
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
