import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import slide1Ellipse1 from "../../public/images/home/slide1ellipse1.png";
import slide1Ellipse2 from "../../public/images/home/slide1ellipse2.png";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";
import slide3Character from "../../public/images/home/slide3character.png";
import slide3Target from "../../public/images/home/slide3target.png";
import slide3Arrow from "../../public/images/home/slide3arrow.png";
import slide3TargetMobile from "../../public/images/home/slide3targetMobile.png"
import { useMediaQuery } from "@mui/material";

const ImageSlide3: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  const x: number[] = [-1500, -1150, -1100, -1300, -1200, -1500, -1100, -1000];

  const maxW650 = useMediaQuery("(max-width:650px)");

  return (
    <div className="main__left-img-slide">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.img
              src={slide3Character.src}
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              exit={{ x: -900 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="character"
              className="main__left-img-character"
              alt="stnk workshop character"
            />
            <motion.img
              src={slide1Ellipse1.src}
              alt="stnk workshop ellipse"
              className="main__left-ellipse main__left-ellipse_slide3_ellipse1"
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              exit={{ x: -600 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="ellipse1"
            />
            <motion.img
              src={slide1Ellipse2.src}
              initial={{ x: -850 }}
              animate={{ x: 0 }}
              exit={{ x: -850 }}
              transition={{ duration: 1.25, delay: 0.1 }}
              key="ellipse2"
              alt="stnk workshop ellipse"
              className="main__left-ellipse main__left-ellipse_slide3_ellipse2"
            />
            <motion.img
              src={!maxW650 ? slide3Target.src : slide3TargetMobile.src}
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              exit={{ x: -1200 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="target"
              alt="stnk workshop target"
              className="main__left-slide3-target"
            />
            <div className="main__left-slide3-arrows">
              {x.map((x: number, i: number) => {
                return (
                  <motion.img
                    src={slide3Arrow.src}
                    initial={{ x }}
                    animate={{ x: 0 }}
                    exit={{ x }}
                    transition={{ duration: 1.4, delay: 0.1 }}
                    key={`target ${i}`}
                    alt="stnk workshop arrow"
                    className="main__left-slide3-arrow"
                  />
                );
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlide3;
