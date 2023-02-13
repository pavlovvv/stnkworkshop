import { ImHammer, ImRocket } from "react-icons/im";
import styles from "../../styles/home/home.module.scss";
import Link from "next/link";

const HomeHeader: React.FC = () => {
  return (
    <>
      <div className={styles["header__buttons-button"]}>
        <ImHammer className="header__icon" color="#e6f7ff" />
        Beta
      </div>
      <Link href="/signup">
        <div className={styles["header__buttons-button"]}>
          <ImRocket className="header__icon" color="#e6f7ff" />
          Start
        </div>
      </Link>
    </>
  );
};

export default HomeHeader;
