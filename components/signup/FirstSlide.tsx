import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/signup.module.scss";
import getImg from "../../other/getImg";
import { ISignUpFirstSlideProps } from "../../typescript/interfaces/data";
import { MyImage } from "../MyImage";

const FirstSlide: NextPage<ISignUpFirstSlideProps> = ({
  active,
  setChangeActive,
  setChangeCurrentPage,
}) => {
  return (
    <>
      <div className={styles.reg__top}>
        <h2>Select your activity</h2>
      </div>
      <div className={styles.reg__middle}>
        <section
          className={
            styles.card + " " + (active === 1 ? styles.card_active : "")
          }
          onClick={() => setChangeActive(1)}
        >
          <div className={styles.card__top}>Guest</div>
          <div className={styles.card__middle} style={{ position: "relative" }}>
            <MyImage
              placeholderSrc={getImg("signup/character1-min.png")}
              src={getImg("signup/character1.png")}
              alt="stnk character312321"
            />
          </div>
          <div className={styles.card__bottom}>
            You prefer to dive into content and discover all community works
          </div>
        </section>

        <section
          className={
            styles.card + " " + (active === 2 ? styles.card_active : "")
          }
          onClick={() => setChangeActive(2)}
        >
          <div className={styles.card__top}>Community Artist</div>
          <div className={styles.card__middle}>
            <MyImage
              placeholderSrc={getImg("signup/character2-min.png")}
              src={getImg("signup/character2.png")}
              alt="stnk character312321"
            />
          </div>
          <div className={styles.card__bottom}>
            You like to make creative and original content, for example: arts,
            skins or concepts
          </div>
        </section>

        <section
          className={
            styles.card + " " + (active === 3 ? styles.card_active : "")
          }
          onClick={() => setChangeActive(3)}
        >
          <div className={styles.card__top}>Media Content Creator</div>
          <div className={styles.card__middle}>
            <MyImage
              placeholderSrc={getImg("signup/character3-min.png")}
              src={getImg("signup/character3.png")}
              alt="stnk character312321"
            />
          </div>
          <div className={styles.card__bottom}>
            You are owner of Youtube channel/VK or FB group with audience
          </div>
        </section>
      </div>
      <div className={styles.reg__bottom}>
        <button disabled={active < 1} onClick={() => setChangeCurrentPage(2)}>
          Next
        </button>
      </div>
    </>
  );
};

export default FirstSlide;
