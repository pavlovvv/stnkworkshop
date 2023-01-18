import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";

const TextSlide1: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          exit={{ x: -700 }}
          key="text"
        >
          First platform <br />
          For Standoff 2 <br />
          Content creators
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TextSlide1;
