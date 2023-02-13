import { ImKey } from "react-icons/im";
import { FaRegAddressBook } from "react-icons/fa";
import styles from "../../styles/home/home.module.scss";
import Link from "next/link";

const SignUpHeader: React.FC = () => {
  return (
    <>
      <Link href="/signup">
        <div className={styles["header__buttons-button"]}>
          <FaRegAddressBook className="header__icon" color="#e6f7ff" />
          Registration
        </div>
      </Link>
      <div className={styles["header__buttons-button"]}>
        <ImKey className="header__icon" color="#e6f7ff" />
        Log in
      </div>
    </>
  );
};

export default SignUpHeader;
