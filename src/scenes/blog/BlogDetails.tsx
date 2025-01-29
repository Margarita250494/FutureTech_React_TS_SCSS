import { BlogBody, BlogNews } from "./blogImport";
import banner from "@/assets/images/blog-details/banner.jpg";

export const BlogDetails = () => {
  return (
    <section className="blog-details" aria-labelledby="blog-details-title">
      <header
        className="blog-details__banner"
        style={{
          background: `linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.88) 75.52%, #141414 100%), url(${banner}) center/cover no-repeat`,
        }}
      >
        <div className="blog-deatils__banner-inner container">
          <h1 className="blog-details__title" id="blog-details-title">
            The Rise of Artificial Intelligence in Healthcare
          </h1>
        </div>
      </header>
      <BlogBody />
      <BlogNews />
    </section>
  );
};
