import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/shared/constants";
import { ResHeroSection } from "./ResHeroSection";
import { AboutSection } from "../home/homeImport";
import { ReportsSection } from "./ReportsSection";



//type Props = {}

export const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Resources</title>
      </Helmet>
      <motion.section
        {...fadeAnimation}
      >
        <ResHeroSection/>
        <ReportsSection/>
        <AboutSection/>
      </motion.section>
    </>
  );
};
