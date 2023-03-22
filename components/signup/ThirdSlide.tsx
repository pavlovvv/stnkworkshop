import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/signup/signup.module.scss";
import { ISignUpThirdSlideProps } from "../../typescript/interfaces/data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormHelperText } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { BiCheck } from "react-icons/bi";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import {
  useAppSelector,
  useAppDispatch,
} from "../../typescript/types/redux-hooks";
import { useTimer } from "react-timer-hook";
import CircularProgress from "@mui/material/CircularProgress";
import { clearError, verify } from "../../redux/user-slice";

const ThirdSlide: NextPage<ISignUpThirdSlideProps> = ({
  handleSubmit,
  onSubmit,
  isValid,
  setValues,
  values,
  errors,
  register,
  setError,
}) => {
  const dispatch = useAppDispatch();

  const [time, setTime] = useState<Date>(new Date());
  const [otpValue, setOtpValue] = useState<string>("");

  const { seconds, restart } = useTimer({ expiryTimestamp: time });

  const isCodeBeingSent = useAppSelector((state) => state.user.isCodeBeingSent);
  const codeError = useAppSelector((state) => state.user.codeError);
  const isPending = useAppSelector((state) => state.user.isPending);
  const error = useAppSelector((state) => state.user.error);

  useEffect(() => {
    if (isCodeBeingSent) {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 30);
      restart(time);
    }

    if (codeError) {
      setError("email", {
        type: "manual",
        message: codeError,
      });
      const time = new Date();
      time.setSeconds(time.getSeconds());
      restart(time);
    }
  }, [isCodeBeingSent, codeError]);

  const theme = createTheme({
    palette: {
      error: {
        main: "#ff7373",
      },
    },
  });

  const handleOtpValueChange = (otp: string) => {
    dispatch(clearError());

    setOtpValue(otp);
  };

  const handleSendingCode = () => {
    dispatch(
      verify({
        email: values.email,
        verificationCode: Number(otpValue),
        password: values.password,
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`${styles.reg__top} ${styles["reg__top_second-slide"]}`}>
        <h2>Complete form</h2>
      </div>
      <div
        className={`${styles.reg__middle} ${styles.reg__middle_third_slide}`}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["form-container"]}>
            <div className={styles.form__inner}>
              <section>
                <div className={styles["form-section__top"]}>
                  <label
                    htmlFor="email"
                    className={styles["form-section__top-label"]}
                  >
                    Your email
                  </label>
                  <FormHelperText
                    id="name"
                    error={!!errors.email}
                    disabled={!errors.email}
                    className={styles["form-section__top-helper-text"]}
                  >
                    {errors.email?.message as string}
                  </FormHelperText>
                </div>
                <CustomTextField
                  id="email"
                  variant="outlined"
                  required
                  error={!!errors.email}
                  onChangeCapture={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValues({
                      ...values,
                      email: e.target.value,
                    });
                  }}
                  customcolor={
                    (values.email.length > 35 && !errors.email) ||
                    (values.email.length < 8 && !errors.email) ||
                    (!values.email.match(
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\s*$/i
                    ) &&
                      !errors.email)
                      ? "54, 73, 255"
                      : errors.email
                      ? "255, 0, 0"
                      : "99, 255, 83"
                  }
                  {...register("email", {
                    required: "Field must be filled",
                    minLength: {
                      value: 8,
                      message: "Min characters - 8",
                    },
                    maxLength: {
                      value: 35,
                      message: "Max characters - 35",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\s*$/i,
                      message: "Invalid email",
                    },
                  })}
                  className={styles["form-section__input"]}
                />
              </section>

              <div className={styles["form-section__submit"]}>
                <button
                  className={styles["form-section__submit-button"]}
                  disabled={isCodeBeingSent || seconds > 0}
                  type="submit"
                >
                  Send code
                </button>

                {seconds > 0 && (
                  <div className={styles["form-section__submit-text"]}>
                    <BiCheck /> Code sent. Another try will be in: {seconds} sec
                  </div>
                )}
              </div>

              <section>
                <div className={styles["form-section__top"]}>
                  <div className={styles["form-section__top-label"]}>
                    Enter your code
                  </div>
                  {error && (
                    <div
                      className={styles["form-section__top-helper-text"]}
                      style={{ color: "#ff7373" }}
                    >
                      {error}
                    </div>
                  )}
                </div>
                <div>
                  <OtpInput
                    value={otpValue}
                    onChange={handleOtpValueChange}
                    numInputs={5}
                    isInputNum
                    containerStyle={styles["form-section__otp-container"]}
                    inputStyle={styles["form-section__otp-input"]}
                    errorStyle={styles["form-section__otp-input_error"]}
                    hasErrored={!!error}
                  />
                </div>
              </section>
            </div>
          </div>
        </form>
      </div>
      <div className={`${styles.reg__bottom}`}>
        <button
          disabled={!isValid || otpValue.length < 5 || isPending}
          onClick={handleSendingCode}
        >
          {!isPending ? (
            "Verify"
          ) : (
            <CircularProgress size={30} sx={{ color: "#cff0ff" }} />
          )}
        </button>
      </div>
    </ThemeProvider>
  );
};

export default ThirdSlide;
