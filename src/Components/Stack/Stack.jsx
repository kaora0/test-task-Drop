import styles from "./Stack.module.scss";
import "../../styles/text-style.css";
import { stackList } from "./stackList";

export function Stack() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3 className="h3_style">My Tech Stack</h3>
          <p className="text_desc">
            Technologies I’ve been working with recently
          </p>
        </div>
        <div className={styles.stack}>
          {stackList.map((item) => (
            <img key={item.id} src={item.way} alt="#" />
          ))}
        </div>
      </div>
    </div>
  );
}
