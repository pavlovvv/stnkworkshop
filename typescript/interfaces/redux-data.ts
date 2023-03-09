type StringOrNull = string | null;

export interface ISignState {
  isPending: boolean;
  isAuthPending: boolean;
  isCodeBeingSent: boolean;
  error: StringOrNull;
  codeError: StringOrNull;
  isAuth: boolean;
}

export interface ISignUp {
  activity: string;
  name: string;
  id: number;
  password: string;
  email: string;
}

export interface IVerify {
  verificationCode: number;
  email: string;
  password: string;
}
