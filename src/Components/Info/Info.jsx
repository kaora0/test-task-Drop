import styles from "./Info.module.scss";
import { Icons } from "../Icons/Icons.jsx";

export function Info() {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="../public/bottom/mono-logo.svg"
              alt="#"
              width={97}
              height={59}
            />
          </div>
          <div className={styles.info_content}>
            <p className={styles.number}>+91 12345 09876</p>
            <p className={styles.email}>info@example.com</p>
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}
