import InitialLayout from "../components/layouts/InitialLayout";
import FirstSlide from "../components/signup/FirstSlide";
import styles from "../styles/signup/signup.module.scss";
import { useState } from "react";
import getImg from "../other/getImg";
import { useForm } from "react-hook-form";
import { IInputPasswordValues } from "../typescript/interfaces/data";
import SecondSlide from "../components/signup/SecondSlide";

const SignUp = () => {
  const [active, setActive] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setChangeActive = (n: number) => {
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
    reset,
    setValue,
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

  const handleChange =
    (prop: keyof IInputPasswordValues) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [prop]: event.target.value });
      setValue(prop, event.target.value);
    };

  const slide: keyof typeof styles =
    currentPage === 1 ? "first-slide-inner" : "second-slide-inner";

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
