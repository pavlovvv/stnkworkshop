import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import slide1Character from "../../public/images/home/slide1character.png";
import slide1Ellipse1 from "../../public/images/home/slide1ellipse1.png";
import slide1Ellipse2 from "../../public/images/home/slide1ellipse2.png";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";

const ImageSlide1: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  return (
    <div className="main__left-img-slide">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.img
              src={slide1Character.src}
              key="character"
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4 }}
              exit={{ opacity: 1, x: -800 }}
              className="main__left-img-character"
              alt="stnk workshop character"
            />
            <motion.img
              src={slide1Ellipse1.src}
              alt="stnk workshop ellipse"
              key="ellipse1"
              className="main__left-ellipse main__left-ellipse_slide1_ellipse1"
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              exit={{ x: -600 }}
              transition={{ duration: 1.4 }}
            />
            <motion.img
              src={slide1Ellipse2.src}
              key="ellipse2"
              initial={{ x: -1150 }}
              animate={{ x: 0 }}
              exit={{ x: -1150 }}
              transition={{ duration: 1.4 }}
              alt="stnk workshop ellipse"
              className="main__left-ellipse main__left-ellipse_slide1_ellipse2"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlide1;
