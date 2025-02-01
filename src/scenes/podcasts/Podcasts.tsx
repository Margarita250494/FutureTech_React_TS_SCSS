import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { PodcastsSection } from "./PodcastsSection";
import { VideosSection } from "./VideosSection";
import { AboutSection } from "../home/homeImport";


export const Podcasts = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Podcasts</title>
      </Helmet>
      <motion.section {...fadeAnimation}>
        <PodcastsSection />
        <VideosSection/>
        <AboutSection />
      </motion.section>
    </>
  );
};
