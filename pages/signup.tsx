import InitialLayout from "../components/layouts/InitialLayout";
import FirstSlide from "../components/signup/FirstSlide";
import styles from "../styles/signup/signup.module.scss";
import { useState } from "react";
import getImg from "../other/getImg";
import { useForm } from "react-hook-form";
import {
  IInputPasswordValues,
  ISignUpSubmit,
} from "../typescript/interfaces/data";
import SecondSlide from "../components/signup/SecondSlide";
import ThirdSlide from "../components/signup/ThirdSlide";
import emojiStrip from "emoji-strip";
import { useAppDispatch } from "./../typescript/types/redux-hooks";
import { signUp } from "../redux/user-slice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setChangeActive = (n: string) => {
    setActive(n);
  };

  const setChangeCurrentPage = (n: number) => {
    setCurrentPage(n);
  };

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const [values, setValues] = useState<IInputPasswordValues>({
    name: "",
    id: 1000000,
    email: "",
    password: "",
    showPassword: false,
  });

  const slide: keyof typeof styles =
    currentPage === 1 ? "first-slide-inner" : "second-slide-inner";

  const onSubmit = ({ name, id, password, email }: ISignUpSubmit) => {
    const properName = emojiStrip(name);

    dispatch(
      signUp({
        activity: active,
        name: properName,
        id,
        email: email.replace(/\s+/g, "").toLowerCase(),
        password,
      })
    );
  };

  return (
    <InitialLayout>
      <main className={styles.reg + " " + styles.reg_margin}>
        <div className={`${styles.reg__inner} ${styles[slide]}`}>
          {currentPage === 1 && (
            <FirstSlide
              active={active}
              setChangeActive={setChangeActive}
              setChangeCurrentPage={setChangeCurrentPage}
            />
          )}
          {currentPage === 2 && (
            <SecondSlide
              errors={errors}
              isValid={isValid}
              register={register}
              values={values}
              setValues={setValues}
              setChangeCurrentPage={setChangeCurrentPage}
            />
          )}

          {currentPage === 3 && (
            <ThirdSlide
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
              isValid={isValid}
              register={register}
              values={values}
              setValues={setValues}
              setError={setError}
            />
          )}
        </div>
        <div className={styles["main-bg"]}>
          {active === "Guest" && (
            <img
              src={getImg("signup/activeBg1-min.png")}
              className={styles["main-bg__img"]}
              alt="stnk background"
            />
          )}

          {active === "Community Artist" && (
            <img
              src={getImg("signup/activeBg2-min.png")}
              className={styles["main-bg__img"]}
              alt="stnk background"
            />
          )}

          {active === "Media Content Creator" && (
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
