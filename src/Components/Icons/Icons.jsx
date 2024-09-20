import styles from "./Icons.module.scss";

export function Icons() {
  return (
    <div className={styles.icons}>
      <img
        src="../public/static/VectorGit.svg"
        alt="#"
        width={30}
        height={30}
      />
      <img
        src="../public/static/VectorTwi.svg"
        alt="#"
        width={30}
        height={30}
      />
      <img
        src="../public/static/VectorInst.svg"
        alt="#"
        width={30}
        height={30}
      />
    </div>
  );
}
