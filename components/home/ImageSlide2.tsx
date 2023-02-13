import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import slide1Ellipse1 from "../../public/images/home/slide1ellipse1.png";
import slide1Ellipse2 from "../../public/images/home/slide1ellipse2.png";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";
import slide2Flame from "../../public/images/home/slide2flame.png";
import slide2G22 from "../../public/images/home/slide2g22.png";
import slide2Mac10 from "../../public/images/home/slide2mac10.png";
import slide2Butterfly from "../../public/images/home/slide2butterfly.png";
import styles from "../../styles/home/home.module.scss";
import getImg from "../../other/getImg";
import { MyImage } from "../MyImage";

const ImageSlide2: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  return (
    <div className={styles["main__left-img-slide"]}>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              exit={{ x: -900 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="character"
              className={styles["main__left-img-slide"]}
              style={{ paddingLeft: 0, zIndex: 2 }}
            >
              <MyImage
                className={styles["main__left-img-character"]}
                placeholderSrc={getImg("home/slide2character-min.png")}
                src={getImg("home/slide2character.png")}
                alt="stnk workshop character"
              />
            </motion.div>
            <motion.img
              src={slide1Ellipse1.src}
              alt="stnk workshop ellipse"
              className={
                styles["main__left-ellipse"] +
                " " +
                styles["main__left-ellipse_slide2_ellipse1"]
              }
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="ellipse1"
            />
            <motion.img
              src={slide1Ellipse2.src}
              initial={{ x: -750 }}
              animate={{ x: 0 }}
              exit={{ x: -750 }}
              transition={{ duration: 1.25, delay: 0.1 }}
              key="ellipse2"
              alt="stnk workshop ellipse"
              className={
                styles["main__left-ellipse"] +
                " " +
                styles["main__left-ellipse_slide2_ellipse2"]
              }
            />
            <motion.img
              src={slide2Flame.src}
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              exit={{ x: -800 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="flame"
              alt="stnk workshop flame"
              className={styles["main__left-slide2-flame"]}
            />
            <motion.img
              src={slide2G22.src}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{ x: -1000 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="g22"
              alt="stnk workshop flame"
              className={styles["main__left-slide2-g22"]}
            />
            <motion.img
              src={slide2Mac10.src}
              initial={{ x: -1100 }}
              animate={{ x: 0 }}
              exit={{ x: -1100 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="mac10"
              alt="stnk workshop flame"
              className={styles["main__left-slide2-mac10"]}
            />
            <motion.img
              src={slide2Butterfly.src}
              initial={{ x: -1200 }}
              animate={{ x: 0 }}
              exit={{ x: -1200 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              key="butterfly"
              alt="stnk workshop flame"
              className={styles["main__left-slide2-butterfly"]}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlide2;
