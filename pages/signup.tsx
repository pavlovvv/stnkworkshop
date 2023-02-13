import InitialLayout from "../components/layouts/InitialLayout";
import FirstSlide from "../components/signup/FirstSlide";
import styles from "../styles/signup.module.scss";
import { useState } from "react";
import getImg from "../other/getImg";

const SignUp = () => {
  const [active, setActive] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setChangeActive = (n: number) => {
    setActive(n);
  };

  const setChangeCurrentPage = (n: number) => {
    setCurrentPage(n);
  };

  return (
    <InitialLayout>
      <main className={styles.reg + " " + styles.reg_margin}>
        <div className={styles.reg__inner}>
          {currentPage === 1 && (
            <FirstSlide
              active={active}
              setChangeActive={setChangeActive}
              setChangeCurrentPage={setChangeCurrentPage}
            />
          )}
        </div>
        <div className={styles["main-bg"]}>
          {active === 1 && (
            <img
              src={getImg("signup/activeBg1-min.png")}
              className={styles["main-bg__img"]}
              alt="stnk background"
            />
          )}

          {active === 2 && (
            <img
              src={getImg("signup/activeBg2-min.png")}
              className={styles["main-bg__img"]}
              alt="stnk background"
            />
          )}

          {active === 3 && (
            <img
              src={getImg("signup/activeBg3-min.png")}
              className={styles["main-bg__img"]}
              alt="stnk background"
            />
          )}
        </div>
      </main>
    </InitialLayout>
  );
};

export default SignUp;
