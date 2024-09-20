import styles from "./About.module.scss";

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
        <div className={styles.about_text}>
          <span className={styles.hi_span}>Hi</span>,<br />
          My name is <span className={styles.name_span}>Pavan MG</span> I build
          things for web
        </div>
        <div className={styles.about_img}>
          <img src="../public/static/about.jpg" alt="#" />
        </div>
      </div>
    </section>
  );
}
