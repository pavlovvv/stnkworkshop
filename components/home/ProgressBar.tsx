import type { NextPage } from "next";
import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { IHomeSlideProps } from "../../typescript/interfaces/data";
import { useState, useEffect } from "react";
import { browserName } from "react-device-detect";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: false;
    xl: false;
  }
}

const ProgressBar: NextPage<IHomeSlideProps> = ({ isVisible }) => {
  const [process, setProcess] = useState<number>(0);

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#fff",
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 1000,
      },
    },
  });

  useEffect(() => {
    let interval: any = 0;

    if (!isVisible) {
      clearInterval(interval);
      setProcess(-1);
    }
    if (isVisible) {
      let bool: boolean = true;
      let count: number = 0;
      const maxCount: number = browserName === "Firefox" ? 7 : 12;
      interval = setInterval(() => {
        setProcess((process) => {
          if (count < maxCount) {
            count++;
            return 0;
          }
          if (process === -1) {
            bool = false;
            return 0;
          }
          if (process < 100) return process + 1;
          return process;
        });
        if (!bool) {
          clearInterval(interval);
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <ThemeProvider theme={theme}>
      <LinearProgress
        variant="determinate"
        value={process}
        color="secondary"
        sx={{
          bgcolor: "transparent",
          height: { xs: "8px", sm: "10px" },
          border: "1px solid rgba(255,255,255,0.5)",
          borderRadius: "5px",
          width: { xs: "130px", md: "200px" },
          marginBottom: { xs: "10px", md: "20px" },
        }}
      />
    </ThemeProvider>
  );
};

export default ProgressBar;
