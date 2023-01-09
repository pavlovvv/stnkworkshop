import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";

const TextSlide3: NextPage<IHomeSlideProps> = ({isVisible}) => {
    return (
      <AnimatePresence>
      {isVisible && (<motion.div
        initial={{ x: -700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        exit={{ x: -700 }}
        key="text"
      > 
        Complete targets <br />
        To get higher <br />
        In leaderboard
      </motion.div>)}
      </AnimatePresence>
      );
}

export default TextSlide3