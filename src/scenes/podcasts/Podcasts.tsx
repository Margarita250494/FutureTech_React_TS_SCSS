
import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { PodcastsSection } from "./PodcastsSection";


export const Podcasts = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Podcasts</title>
      </Helmet>
      <motion.section
        {...fadeAnimation}
      >
        <PodcastsSection/>
      </motion.section>
    </>
  );
};
