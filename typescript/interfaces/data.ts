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
