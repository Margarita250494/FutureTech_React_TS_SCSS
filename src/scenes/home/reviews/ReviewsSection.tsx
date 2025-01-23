import { Header } from "@/components/section/Header";
import { ReviewsBody } from "./ReviewsBody";

export const ReviewsSection = () => {
  return (
    <section className="section" aria-labelledby="reviews-title">
      <Header
        to="/"
        id="reviews-title"
        subtitle="What Our Readers Say"
        title="Real Words from Real Readers"
        link="View All Testimonials"
      />
      <ReviewsBody />
    </section>
  );
};
