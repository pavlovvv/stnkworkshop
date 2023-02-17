import { useState, useEffect } from "react";
import { IMyImageProps } from "../typescript/interfaces/data";
import styles from "../styles/other.module.scss";
import { NoSsr } from "@mui/material";

export const MyImage: React.FC<IMyImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc);

  const cn = `${styles.progressive} ${
    imageSrc === placeholderSrc ? styles.loading : styles.loaded
  }`;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <NoSsr>
      <img
        className={`${className || ""} ${cn}`}
        src={imageSrc}
        alt={alt || ""}
      />
    </NoSsr>
  );
};
