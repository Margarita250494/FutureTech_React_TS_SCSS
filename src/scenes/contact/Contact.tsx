import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SectionHeader } from "./SectionHeader";
import { SectionBody } from "./SectionBody";
import { AboutSection } from "../home/homeImport";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Contact</title>
      </Helmet>
      <motion.section {...fadeAnimation}>
        <SectionHeader/>
        <SectionBody/>
        <AboutSection />
      </motion.section>
    </>
  );
};
