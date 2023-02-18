import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/signup/signup.module.scss";
import { ISignUpSecondSlideProps } from "../../typescript/interfaces/data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormHelperText, InputAdornment, IconButton } from "@mui/material";
import SpecialSymbols from "../../other/special-symbols";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomTextField from "./CustomTextField";

const SecondSlide: NextPage<ISignUpSecondSlideProps> = ({
  setChangeCurrentPage,
  isValid,
  setValues,
  values,
  errors,
  register,
}) => {
  
  const theme = createTheme({
    palette: {
      error: {
        main: "#ff7373",
      },
    },
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`${styles.reg__top} ${styles["reg__top_second-slide"]}`}>
        <h2>Complete form</h2>
      </div>
      <div className={styles.reg__middle}>
        <form className={styles.form}>
          <div className={styles["form-container"]}>
            <div className={styles.form__inner}>
              <section>
                <div className={styles["form-section__top"]}>
                  <label
                    htmlFor="name"
                    className={styles["form-section__top-label"]}
                  >
                    Your nickname
                  </label>
                  <FormHelperText
                    id="name"
                    error={!!errors.name}
                    disabled={!errors.name}
                    className={styles["form-section__top-helper-text"]}
                  >
                    {errors.name?.message as string}
                  </FormHelperText>
                </div>
                <CustomTextField
                  id="name"
                  variant="outlined"
                  required
                  error={!!errors.name}
                  onChangeCapture={(e: any) => {
                    setValues({
                      ...values,
                      name: e.target.value,
                    });
                  }}
                  customcolor={
                    (values.name.length > 16 && !errors.name) ||
                    (values.name.length < 4 && !errors.name) ||
                    (!values.name.match(SpecialSymbols()) && !errors.name)
                      ? "54, 73, 255"
                      : errors.name
                      ? "255, 0, 0"
                      : "99, 255, 83"
                  }
                  {...register("name", {
                    required: "Field must be filled",
                    minLength: {
                      value: 4,
                      message: "Min characters - 4",
                    },
                    maxLength: {
                      value: 16,
                      message: "Max characters - 16",
                    },
                    pattern: {
                      value: SpecialSymbols(),
                      message: "Invalid symbols",
                    },
                  })}
                  className={styles["form-section__input"]}
                />
              </section>

              <section>
                <div className={styles["form-section__top"]}>
                  <label
                    htmlFor="id"
                    className={styles["form-section__top-label"]}
                  >
                    Your Standoff 2 ID
                  </label>
                  <FormHelperText
                    id="id"
                    error={!!errors.id}
                    disabled={!errors.id}
                    className={styles["form-section__top-helper-text"]}
                  >
                    {errors.id?.message as string}
                  </FormHelperText>
                </div>
                <CustomTextField
                  id="id"
                  variant="outlined"
                  required
                  error={!!errors.id}
                  onChangeCapture={(e: any) => {
                    setValues({
                      ...values,
                      id: e.target.value,
                    });
                  }}
                  customcolor={
                    (values.id < 10000000 && !errors.id) ||
                    (values.id > 100000000000 && !errors.id) ||
                    (!Number(values.id) && !errors.id)
                      ? "54, 73, 255"
                      : errors.id
                      ? "255, 0, 0"
                      : "99, 255, 83"
                  }
                  {...register("id", {
                    required: "Field must be filled",
                    minLength: {
                      value: 8,
                      message: "Min characters - 8",
                    },
                    maxLength: {
                      value: 11,
                      message: "Max characters - 11",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Invalid ID",
                    },
                  })}
                  className={styles["form-section__input"]}
                />
              </section>

              <section>
                <div className={styles["form-section__top"]}>
                  <label
                    htmlFor="password"
                    className={styles["form-section__top-label"]}
                  >
                    Your password
                  </label>
                  <FormHelperText
                    id="password"
                    error={!!errors.password}
                    disabled={!errors.password}
                    className={styles["form-section__top-helper-text"]}
                  >
                    {errors.password?.message as string}
                  </FormHelperText>
                </div>
                <CustomTextField
                  id="password"
                  variant="outlined"
                  required
                  error={!!errors.password}
                  type={values.showPassword ? "text" : "password"}
                  onChangeCapture={(e: any) => {
                    setValues({
                      ...values,
                      password: e.target.value,
                    });
                  }}
                  customcolor={
                    (values.password.length > 20 && !errors.password) ||
                    (values.password.length < 8 && !errors.password)
                      ? "54, 73, 255"
                      : errors.password
                      ? "255, 0, 0"
                      : "99, 255, 83"
                  }
                  {...register("password", {
                    required: "Field must be filled",
                    minLength: {
                      value: 8,
                      message: "Min characters - 8",
                    },
                    maxLength: {
                      value: 20,
                      message: "Max characters - 20",
                    },
                  })}
                  className={styles["form-section__input"]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ position: "absolute", right: "10px" }}
                      >
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx={{ color: "#fff" }}
                        >
                          {values.showPassword ? <FaEyeSlash /> : <FaEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </section>
            </div>
          </div>
        </form>
      </div>
      <div
        className={`${styles.reg__bottom} ${styles["reg__bottom_second-slide"]}`}
      >
        <button disabled={!isValid} onClick={() => setChangeCurrentPage(3)}>
          Next
        </button>
      </div>
    </ThemeProvider>
  );
};

export default SecondSlide;
