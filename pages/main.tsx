import { NextPage } from "next";
import InitialLayout from "../components/layouts/InitialLayout";
import { useRouter } from "next/router";
import { useAppDispatch } from "../typescript/types/redux-hooks";
import { setAuth } from "../redux/user-slice";
import { useEffect } from "react";

const Main: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(setAuth(false));
    localStorage.removeItem("token");
    router.push("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <InitialLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          rowGap: "20px",
        }}
      >
        You have signed up your account
        <button
          style={{
            border: "1px solid #fff",
            color: "#fff",
            padding: "15px",
            borderRadius: "10px",
          }}
          onClick={() => {handleLogOut()}}
        >
          Log out
        </button>
      </div>
    </InitialLayout>
  );
};

export default Main;
