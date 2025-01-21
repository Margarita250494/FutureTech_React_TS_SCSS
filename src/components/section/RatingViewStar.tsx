interface RatingViewStarProps {
  rating: number;
}

export const RatingViewStar = ({ rating }: RatingViewStarProps) => {
  const totalStars = 5;

  return (
    <div
      className="review-card__rating-view rating-view"
      aria-label={`Rating ${rating} star${rating > 1 ? "s" : ""}`}
      title={`Rating ${rating} star${rating > 1 ? "s" : ""}`}
    >
      {Array.from({ length: totalStars }).map((_, index) => (
        <div
          key={index}
          className={`rating-view__star ${index < rating ? "is-active" : ""}`}
        ></div>
      ))}
    </div>
  );
};
