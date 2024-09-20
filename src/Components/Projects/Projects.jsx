import styles from "./Projects.module.scss";
import "../../styles/text-style.css";
import { projectList } from "./projectsList";

export function Projects() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3 className="h3_style">Projects</h3>
          <p className="text_desc">Things I’ve built so far</p>
        </div>
        <div>
          <ul>
            {projectList.map((item) => (
              <li key={item.id}>
                <div className={styles.cart}>
                  <img src={item.img} alt="#" />

                  <div className={styles.cart_text}>
                    <h4 className={styles.project_title}>{item.title}</h4>
                    <p className={styles.project_text}>{item.text}</p>
                    <p className={styles.stack_text}>
                      <span>Tech stack :</span> {item.tstack}
                    </p>

                    <div className={styles.links}>
                      <div>
                        <img
                          src="../public/link-ico/link.png"
                          alt="#"
                          style={{ width: 20, height: 20 }}
                        />
                        <a className={styles.a_link} href="#">
                          Live Preview
                        </a>
                      </div>
                      <div>
                        <img
                          src="../public/link-ico/github.png"
                          alt="#"
                          style={{ width: 20, height: 20 }}
                        />
                        <a className={styles.a_git} href="#">
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
