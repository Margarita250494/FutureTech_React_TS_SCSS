import { Helmet } from "react-helmet-async";
import { AboutSection,BlogSection,FeatureSection,HeroSection,ResourcesSection,ReviewsSection } from "./homeImport";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/shared/constants";


export const Home = () => {
  return (
    <motion.section 
      {...fadeAnimation}
    >
      <Helmet><title>Future Tech | Home</title></Helmet>
      <HeroSection />
      <FeatureSection />
      <BlogSection />
      <ResourcesSection />
      <ReviewsSection />
      <AboutSection/>
      
    </motion.section>
  );
};
