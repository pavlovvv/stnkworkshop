type StringOrNull = string | null;

export interface ISignState {
  isPending: boolean;
  isAuthPending: boolean;
  isCodeBeingSent: boolean;
  error: StringOrNull;
  codeError: StringOrNull;
  loginError: StringOrNull;
  isAuth: boolean;
}

export interface ISignUp {
  activity: string;
  name: string;
  id: number;
  password: string;
  email: string;
}

export interface ILogIn {
  email: string;
  password: string;
}

export interface IVerify {
  verificationCode: number;
  email: string;
  password: string;
}
