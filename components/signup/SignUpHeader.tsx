import { ImKey } from "react-icons/im";
import { FaRegAddressBook } from "react-icons/fa";
import styles from "../../styles/home/home.module.scss";
import Link from "next/link";
import { ISignUpHeaderProps } from "../../typescript/interfaces/data";

const SignUpHeader: React.FC<ISignUpHeaderProps> = ({ pathname }) => {
  return (
    <>
      <Link href="/signup">
        <div
          className={`${styles["header__buttons-button"]} ${
            pathname === "signup" && styles["header__buttons-button_active"]
          }`}
        >
          <FaRegAddressBook className="header__icon" color="#e6f7ff" />
          Registration
        </div>
      </Link>
      <Link href="/login">
        <div
          className={`${styles["header__buttons-button"]} ${
            pathname === "login" && styles["header__buttons-button_active"]
          }`}
        >
          <ImKey className="header__icon" color="#e6f7ff" />
          Log in
        </div>
      </Link>
    </>
  );
};

export default SignUpHeader;
