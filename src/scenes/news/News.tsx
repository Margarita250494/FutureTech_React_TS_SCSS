import { Helmet } from "react-helmet-async";
import { HeroAltSection,NewsBlogSection,FeaturedVideosSection,AboutSection } from "./newsImport";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/shared/constants";

export const News = () => {
  return (
    <motion.section
      {...fadeAnimation}
    >
      <Helmet><title>Future Tech | News</title></Helmet>
      <HeroAltSection />
      <NewsBlogSection />
      <FeaturedVideosSection />
      <AboutSection />
    </motion.section>
  );
};
