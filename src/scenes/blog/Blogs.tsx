import { Helmet } from "react-helmet-async"
import { BlogDetails } from "./BlogDetails"

export const Blogs = () => {
  return (
    <>
    <Helmet><title>Future Tech | Blogs</title></Helmet>
    <BlogDetails/>
    </>
  )
}
