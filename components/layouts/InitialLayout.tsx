import React from "react";
import Image from "next/legacy/image";
import { ImMail, ImVk, ImTelegram } from "react-icons/im";
import logo from "../../public/images/logo.svg";
import styles from "../../styles/home/home.module.scss";
import styles2 from "../../styles/other.module.scss";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import HomeHeader from "../home/HomeHeader";
import SignUpHeader from "../signup/SignUpHeader";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../typescript/types/redux-hooks";
import { checkAuth } from "../../redux/user-slice";
import CircularProgress from "@mui/material/CircularProgress";

const FooterLinks: React.FC = () => {
  return (
    <>
      <a>For Media</a>
      <a>For Community Artists</a>
      <a>Become a Partner</a>
      <a>Our Team</a>
      <a>License</a>
      <a>Standoff 2 EULA</a>
    </>
  );
};

const InitialLayout: React.FC<any> = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthPending = useAppSelector((state) => state.user.isAuthPending);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  let pathname: string = router.pathname.substring(1);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }

    if (isAuth && router.pathname !== "/main") {
      router.push("/main");
    }
  }, [isAuth]);

  if (!pathname) pathname = "main";

  const maxW900 = useMediaQuery("(max-width:900px)");

  return (
    <>
      <div
        className={`${styles.home} ${
          pathname === "signup" || pathname === "login"
            ? styles.home_bg_signup
            : styles.home_bg_main
        }`}
        key={+isAuthPending}
      >
        <div className={isAuthPending ? styles2.none : styles.container}>
          <div className={styles.home__inner}>
            <header className={styles.header}>
              <div className={styles.header__container}>
                <div className={styles.header__inner}>
                  <div className={styles.header__logo}>
                    <Link href="/">
                      <Image
                        src={logo.src}
                        layout="fill"
                        objectFit="contain"
                        alt="stnk logo"
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className={styles.header__buttons}>
                    {pathname === "main" && <HomeHeader />}
                    {(pathname === "signup" || pathname === "login") && (
                      <SignUpHeader pathname={pathname} />
                    )}
                  </div>
                </div>
              </div>
            </header>
            {children}
            <footer className={styles.footer}>
              <div className={styles.footer__container}>
                <div className={styles.footer__inner}>
                  <div className={styles.footer__media}>
                    <ImMail
                      size="25px"
                      className={styles["footer__media-icon"]}
                      color="#b9c9d2"
                    />
                    <ImVk
                      size="25px"
                      className={styles["footer__media-icon"]}
                      color="#b9c9d2"
                    />{" "}
                    <ImTelegram
                      size="25px"
                      className={styles["footer__media-icon"]}
                      color="#b9c9d2"
                    />
                  </div>
                  {maxW900 ? (
                    <section className={styles.footer__links}>
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
      {isAuthPending && (
        <div className={styles2.preloader}>
          <div className={styles2["preloader-item"]}>
            <CircularProgress
              size={100}
              sx={{ display: "block", margin: "auto", color: "#fff" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InitialLayout;
