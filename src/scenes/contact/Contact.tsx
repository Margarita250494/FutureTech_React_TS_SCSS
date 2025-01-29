import { fadeAnimation } from "@/shared/constants";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Future Tech | Contact</title>
      </Helmet>
      <motion.section {...fadeAnimation}>
        <h1>Welcome to Contact</h1>
      </motion.section>
    </>
  );
};
