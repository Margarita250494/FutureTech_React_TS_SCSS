import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";


export const Podcasts = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Podcasts</title>
      </Helmet>
      <motion.section
        {...fadeAnimation}
      >
        <h1>Welcome to the Podcasts Page</h1>
      </motion.section>
    </>
  );
};
