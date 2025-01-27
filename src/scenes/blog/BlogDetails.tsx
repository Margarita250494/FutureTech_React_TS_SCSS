import { BlogBody } from "./BlogBody"
import { BlogNews } from "./BlogNews"


export const BlogDetails = () => {
  return (
    <section className="blog-details" aria-labelledby="blog-details-title">
        <header className="blog-details__banner">
            <div className="blog-deatils__banner-inner container">
                <h1 className="blog-details__title" id="blog-details-title">The Rise of Artificial Intelligence in Healthcare</h1>
            </div>
        </header>
        <BlogBody/>
        <BlogNews/>
    </section>
  )
}

