import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Contact</title>
      </Helmet>
      <motion.section {...fadeAnimation}>
        <SectionHeader/>
      </motion.section>
    </>
  );
};
