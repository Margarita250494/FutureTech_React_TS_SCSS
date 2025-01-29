import { Helmet } from "react-helmet-async";
import { Metrics } from "../home/hero/Metrics";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/shared/constants";


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
        <h1>Welcome to the Resources Page</h1>
        <Metrics />
      </motion.section>
    </>
  );
};
