import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import slide1Ellipse1 from "../../public/images/home/slide1ellipse1.png";
import slide1Ellipse2 from "../../public/images/home/slide1ellipse2.png";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";
import styles from "../../styles/home/home.module.scss";
import getImg from "../../other/getImg";
import { MyImage } from "../MyImage";

const ImageSlide1: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  return (
    <div className={styles["main__left-img-slide"]}>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              key={"character"}
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4 }}
              exit={{ opacity: 1, x: -800 }}
              className={`${styles["main__left-img-slide"]}`}
              style={{ paddingLeft: 0, zIndex: 2 }}
            >
              <MyImage
                className={styles["main__left-img-character"]}
                placeholderSrc={getImg("home/slide1character-min.png")}
                src={getImg("home/slide1character-mid.png")}
                alt="stnk workshop character"
              />
            </motion.div>
            <motion.img
              src={slide1Ellipse1.src}
              alt="stnk workshop ellipse"
              key="ellipse1"
              className={
                styles["main__left-ellipse"] +
                " " +
                styles["main__left-ellipse_slide1_ellipse1"]
              }
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
              className={
                styles["main__left-ellipse"] +
                " " +
                styles["main__left-ellipse_slide1_ellipse2"]
              }
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlide1;
