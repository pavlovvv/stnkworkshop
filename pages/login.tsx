import InitialLayout from "../components/layouts/InitialLayout";
import styles from "../styles/signup/signup.module.scss";
import login_styles from "../styles/login/login.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../typescript/types/redux-hooks";
import CustomTextField from "../components/signup/CustomTextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormHelperText,
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  ILoginInputValues,
  ILoginSubmit,
} from "./../typescript/interfaces/data";
import { login } from "../redux/user-slice";

const SignUp = () => {
  const theme = createTheme({
    palette: {
      error: {
        main: "#ff7373",
      },
    },
  });

  const dispatch = useAppDispatch();

  const isPending = useAppSelector((state) => state.user.isPending);
  const error = useAppSelector((state) => state.user.loginError);

  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const [values, setValues] = useState<ILoginInputValues>({
    email: "",
    password: "",
    showPassword: false,
  });

  const onSubmit = ({ email, password }: ILoginSubmit) => {
    if (email && password) {
      dispatch(
        login({
          email: email.replace(/\s+/g, "").toLowerCase(),
          password,
        })
      );
    }
  };

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
    <InitialLayout>
      <ThemeProvider theme={theme}>
        <main className={styles.reg + " " + styles.reg_margin}>
          <div
            className={`${styles.reg__inner} ${styles["second-slide-inner"]}`}
          >
            <div
              className={`${styles.reg__top} ${styles["reg__top_second-slide"]}`}
            >
              <h2>Welcome back</h2>
            </div>
            <div className={styles.reg__middle}>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div
                  className={`${styles["form-container"]} ${login_styles["form-container_login"]}`}
                >
                  <div
                    className={`${styles.form__inner} ${login_styles.form__inner_login}`}
                  >
                    <section>
                      <div className={styles["form-section__top"]}>
                        <label
                          htmlFor="email"
                          className={styles["form-section__top-label"]}
                        >
                          Your email
                        </label>
                        <FormHelperText
                          id="email"
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
                        onChangeCapture={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
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
                        onChangeCapture={(
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
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
                                {values.showPassword ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </section>
                  </div>
                  <div
                    className={`${styles.reg__bottom} ${login_styles.reg__bottom_login}`}
                  >
                    <button disabled={!isValid || isPending}>
                      {!isPending ? (
                        "Submit"
                      ) : (
                        <CircularProgress size={30} sx={{ color: "#cff0ff" }} />
                      )}
                    </button>
                    {error && (
                      <Alert
                        severity="error"
                        variant="filled"
                        sx={{ justifyContent: "center" }}
                      >
                        {error}
                      </Alert>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </InitialLayout>
  );
};

export default SignUp;
