export interface IHomeSlideProps {
  isVisible: boolean;
}

export interface ISignUpFirstSlideProps {
  active: number;
  setChangeActive: (n: number) => void;
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
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface ISignUpSecondSlideProps {
  setChangeCurrentPage: (n: number) => void;
  isValid: boolean;
  setValues: Dispatch<SetStateAction<IInputPasswordValues>>;
  values: IInputPasswordValues;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}
