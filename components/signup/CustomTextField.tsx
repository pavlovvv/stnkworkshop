import { TextField } from "@mui/material";
import styled from "@emotion/styled";

interface ICustomTextFieldProps {
  customcolor: string;
}

const CustomTextField = styled(TextField)<ICustomTextFieldProps>(
  ({ theme, customcolor }) => ({
    "&": {
      borderRadius: "10px",
      background: `${
        customcolor !== "54, 73, 255"
          ? `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(${customcolor}, 0.1) 100%);`
          : "rgba(190, 253, 255, 0.03)"
      }`,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(${customcolor}, 0.1) 100%);`,
        borderRadius: "10px",
      },
    },
  })
);

export default CustomTextField;
