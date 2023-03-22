import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://stnkcc.lm.r.appspot.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const API = {
  signAPI: {
    signUp: (
      activity: string,
      email: string,
      password: string,
      name: string,
      id: number
    ) => {
      return instance
        .post(`auth/signup`, {
          activity,
          email,
          password,
          username: name,
          gameId: id,
        })
        .then((response) => response);
    },

    login: (email: string, password: string) => {
      return instance
        .post(`auth/login`, {
          email,
          password,
        })
        .then((response) => response);
    },

    verify: (verificationCode: number, email: string) => {
      return instance
        .post(`auth/verifyCode`, { verificationCode, email })
        .then((response) => response);
    },

    checkAuth: () => {
      return instance.get(`auth/refresh`).then((response) => response);
    },
  },
};
