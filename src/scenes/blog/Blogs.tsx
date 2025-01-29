import { Helmet } from "react-helmet-async"
import { BlogDetails } from "./BlogDetails"
import { motion } from "framer-motion"
import { fadeAnimation } from "@/shared/constants"


export const Blogs = () => {
  return (
    <motion.section
    {...fadeAnimation}>
    <Helmet><title>Future Tech | Blogs</title></Helmet>
    <BlogDetails/>
    </motion.section>
  )
}
