import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { API } from "../other/http/data";
import { AppDispatch } from "./store";
import {
  ISignUp,
  IVerify,
  ISignState,
} from "../typescript/interfaces/redux-data";

export const signUp = createAsyncThunk<
  object,
  ISignUp,
  { dispatch: AppDispatch }
>(
  "user/signUp",
  async function ({ activity, email, password, name, id }, { dispatch }) {
    try {
      dispatch(setCodeBeingSent(true));
      const response = await API.signAPI.signUp(
        activity,
        email,
        password,
        name,
        id
      );

      dispatch(setCodeBeingSent(false));
    } catch (error) {
      dispatch(setCodeBeingSent(false));

      if (!error.response) {
        return dispatch(setCodeError("Some error occured. Try again later"));
      }

      const status = error.response.status;
      dispatch(
        setCodeError(
          status ? error.response.data.message : "Some error occured"
        )
      );
    }
  }
);

export const verify = createAsyncThunk<
  object,
  IVerify,
  { dispatch: AppDispatch }
>(
  "user/verify",
  async function ({ verificationCode, email, password }, { dispatch }) {
    try {
      dispatch(setPending(true));
      const response = await API.signAPI.verify(verificationCode, email);

      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);

      dispatch(confirmReg());
      dispatch(setPending(false));
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
    } catch (error) {
      dispatch(setPending(false));

      if (!error.response) {
        return dispatch(setError("Some error occured. Try again later"));
      }

      const status = error.response.status;
      dispatch(
        setError(status ? error.response.data.message : "Some error occured")
      );
    }
  }
);

export const checkAuth = createAsyncThunk<
  object,
  void,
  { dispatch: AppDispatch }
>("user/checkAuth", async function (_, { dispatch }) {
  try {
    dispatch(setAuthPending(true));
    const response = await API.signAPI.checkAuth();

    localStorage.setItem("token", response.data.accessToken);

    dispatch(setAuthPending(false));
    dispatch(setAuth(true));
  } catch (error) {
    dispatch(setAuthPending(false));
  }
});

const initialState: ISignState = {
  isPending: false,
  isAuthPending: false,
  isCodeBeingSent: false,
  error: null,
  codeError: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    confirmReg(state) {
      state.error = null;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setAuthPending(state, action: PayloadAction<boolean>) {
      state.isAuthPending = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setCodeError(state, action: PayloadAction<string>) {
      state.codeError = action.payload;
    },
    setPending(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload;
    },
    setCodeBeingSent(state, action: PayloadAction<boolean>) {
      state.isCodeBeingSent = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  confirmReg,
  setAuth,
  setAuthPending,
  setError,
  setCodeError,
  setPending,
  setCodeBeingSent,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;
