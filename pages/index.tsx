import React from "react";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import localFont from "@next/font/local";
import { ImHammer, ImRocket, ImMail, ImVk, ImTelegram } from "react-icons/im";
import logo from "../public/images/logo.png";
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
import "../styles/home/home.scss";

const UniSansRegular = localFont({
  src: "../public/fonts/Uni Sans Regular.ttf",
  preload: true,
});

const UniSansThin = localFont({
  src: "../public/fonts/UniSans-Trial-Thin.otf",
  preload: true,
});

const BgSlide1: React.FC = () => {
  return (
    <img src={slide1Bg.src} className="main-bg__img" alt="stnk background" />
  );
};

const BgSlide2: React.FC = () => {
  return (
    <img src={slide2Bg.src} className="main-bg__img" alt="stnk background" />
  );
};

const BgSlide3: React.FC = () => {
  return (
    <img src={slide3Bg.src} className="main-bg__img" alt="stnk background" />
  );
};

const FooterLinks: React.FC = () => {
  return (
    <>
      <a>For Media</a>
      <a>For Content Creators</a>
      <a>Become a Partner</a>
      <a>Our Team</a>
      <a>License</a>
      <a>Standoff 2 EULA</a>
    </>
  );
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home: NextPage = () => {
  const [activeMainStep, setActiveMainStep] = useState<number>(0);
  const [isVisible, setVisible] = useState<boolean>(true);

  const maxW900 = useMediaQuery("(max-width:900px)");
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
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <header className="header">
            <div className="header__container">
              <div className="header__inner">
                <div className="header__logo">
                  <Image
                    src={logo.src}
                    layout="fill"
                    objectFit="contain"
                    alt="stnk logo"
                    priority={true}
                  />
                </div>
                <div className={`header__buttons ${UniSansRegular.className}`}>
                  <div className="header__buttons-button">
                    <ImHammer className="header__icon" color="#e6f7ff" />
                    Beta
                  </div>
                  <div className="header__buttons-button">
                    <ImRocket className="header__icon" color="#e6f7ff" />
                    Start
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <section className="main__left">
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
              >
                <ImageSlide1 isVisible={isVisible} />
                <ImageSlide2 isVisible={isVisible} />
                <ImageSlide3 isVisible={isVisible} />
              </AutoPlaySwipeableViews>
            </section>
            <section className={`main__right ${UniSansThin.className}`}>
              <ProgressBar isVisible={isVisible} />
              <AutoPlaySwipeableViews
                index={activeMainStep}
                onChangeIndex={handleMainStepChange}
                interval={12000}
              >
                <TextSlide1 isVisible={isVisible} />
                <TextSlide2 isVisible={isVisible} />
                <TextSlide3 isVisible={isVisible} />
              </AutoPlaySwipeableViews>
              <div className="main__right-btns">
                <div
                  className="main__right-btn1"
                  style={
                    activeMainStep === 0 ? { backgroundColor: "#fff" } : {}
                  }
                  onClick={() => handleMainStepChange(0)}
                />

                <div
                  className="main__right-btn2"
                  style={
                    activeMainStep === 1 ? { backgroundColor: "#fff" } : {}
                  }
                  onClick={() => handleMainStepChange(1)}
                />

                <div
                  className="main__right-btn3"
                  style={
                    activeMainStep === 2 ? { backgroundColor: "#fff" } : {}
                  }
                  onClick={() => handleMainStepChange(2)}
                />
              </div>
            </section>
            <div className="main-bg">
              {activeMainStep === 0 && <BgSlide1 />}
              {activeMainStep === 1 && <BgSlide2 />}
              {activeMainStep === 2 && <BgSlide3 />}
            </div>
          </main>
          <footer className={`footer ${UniSansThin.className}`}>
            <div className="footer__container">
              <div className="footer__inner">
                <div className="footer__media">
                  <ImMail
                    size="25px"
                    className="footer__media-icon"
                    color="#b9c9d2"
                  />
                  <ImVk
                    size="25px"
                    className="footer__media-icon"
                    color="#b9c9d2"
                  />{" "}
                  <ImTelegram
                    size="25px"
                    className="footer__media-icon"
                    color="#b9c9d2"
                  />
                </div>
                {maxW900 ? (
                  <section className="footer__links">
                    <FooterLinks />
                  </section>
                ) : (
                  <FooterLinks />
                )}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
