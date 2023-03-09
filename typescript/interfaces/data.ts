export interface IHomeSlideProps {
  isVisible: boolean;
}

export interface ISignUpFirstSlideProps {
  active: string;
  setChangeActive: (n: string) => void;
  setChangeCurrentPage: (n: number) => void;
}

export interface IMyImageProps {
  src: string;
  placeholderSrc: string;
  className?: any;
  alt?: string;
}

export interface IInputPasswordValues {
  name: string;
  password: string;
  id: number;
  email: string;
  showPassword: boolean;
}

import { Dispatch, SetStateAction } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";

export interface ISignUpSecondSlideProps {
  setChangeCurrentPage: (n: number) => void;
  isValid: boolean;
  setValues: Dispatch<SetStateAction<IInputPasswordValues>>;
  values: IInputPasswordValues;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export interface ISignUpThirdSlideProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  isValid: boolean;
  setValues: Dispatch<SetStateAction<IInputPasswordValues>>;
  values: IInputPasswordValues;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setError: UseFormSetError<FieldValues>;
}

export interface ISignUpSubmit {
  name: string;
  id: number;
  password: string;
  email: string;
}
