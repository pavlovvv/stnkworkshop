import React from "react";
import type { NextPage } from "next";
import slide1Bg from "../public/images/home/slide1bg.png";
import slide2Bg from "../public/images/home/slide2bg.png";
import slide3Bg from "../public/images/home/slide3bg.png";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import ImageSlide1 from "../components/home/ImageSlide1";
import ImageSlide2 from "../components/home/ImageSlide2";
import ImageSlide3 from "../components/home/ImageSlide3";
import TextSlide1 from "../components/home/TextSlide1";
import TextSlide2 from "../components/home/TextSlide2";
import TextSlide3 from "../components/home/TextSlide3";
import ProgressBar from "../components/home/ProgressBar";
import { useMediaQuery } from "@mui/material";
import styles from "../styles/home/home.module.scss";
import InitialLayout from "../components/layouts/InitialLayout";
import Image from "next/legacy/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home: NextPage = () => {
  const [activeMainStep, setActiveMainStep] = useState<number>(0);
  const [isVisible, setVisible] = useState<boolean>(true);

  const maxW650 = useMediaQuery("(max-width:650px)");

  const handleMainStepChange = (step: number): void => {
    const time: number = !maxW650 ? 1500 : 1100;
    if (isVisible) {
      setVisible(false);
      setTimeout(() => {
        setActiveMainStep(step);
        setVisible(true);
      }, time);
    }
  };

  return (
    <InitialLayout>
      <main className={styles.main}>
        <section className={styles.main__left}>
          <AutoPlaySwipeableViews
            index={activeMainStep}
            onChangeIndex={handleMainStepChange}
            style={{ display: "flex" }}
            slideStyle={{
              flexGrow: 1,
              display: "flex",
              overflow: "hidden",
            }}
            interval={12000}
            disabled={true}
          >
            <ImageSlide1 isVisible={isVisible} />
            <ImageSlide2 isVisible={isVisible} />
            <ImageSlide3 isVisible={isVisible} />
          </AutoPlaySwipeableViews>
        </section>
        <section className={styles.main__right}>
          <ProgressBar isVisible={isVisible} />
          <AutoPlaySwipeableViews
            index={activeMainStep}
            onChangeIndex={handleMainStepChange}
            interval={12000}
            disabled={true}
            className={styles["text-swipeable-views"]}
          >
            <TextSlide1 isVisible={isVisible} />
            <TextSlide2 isVisible={isVisible} />
            <TextSlide3 isVisible={isVisible} />
          </AutoPlaySwipeableViews>
          <div className={styles["main__right-btns"]}>
            <div
              className={styles["main__right-btn1"]}
              style={activeMainStep === 0 ? { backgroundColor: "#fff" } : {}}
              onClick={() => handleMainStepChange(0)}
            />

            <div
              className={styles["main__right-btn2"]}
              style={activeMainStep === 1 ? { backgroundColor: "#fff" } : {}}
              onClick={() => handleMainStepChange(1)}
            />

            <div
              className={styles["main__right-btn3"]}
              style={activeMainStep === 2 ? { backgroundColor: "#fff" } : {}}
              onClick={() => handleMainStepChange(2)}
            />
          </div>
        </section>
        <div className={styles["main-bg"]}>
          {activeMainStep === 0 && (
            <Image
              src={slide1Bg.src}
              className={styles["main-bg__img"]}
              alt="stnk background"
              objectFit="cover"
              layout="fill"
            />
          )}
          {activeMainStep === 1 && (
            <Image
              src={slide2Bg.src}
              className={styles["main-bg__img"]}
              alt="stnk background"
              objectFit="cover"
              layout="fill"
            />
          )}
          {activeMainStep === 2 && (
            <Image
              src={slide3Bg.src}
              className={styles["main-bg__img"]}
              alt="stnk background"
              objectFit="cover"
              layout="fill"
            />
          )}
        </div>
      </main>
    </InitialLayout>
  );
};

export default Home;
