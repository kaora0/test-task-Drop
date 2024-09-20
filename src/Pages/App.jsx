import styles from "./App.module.scss";
import { Header } from "../Components/Header/Header";
import { About } from "../Components/About/About";
import { Stack } from "../Components/Stack/Stack";
import { Projects } from "../Components/Projects/Projects.jsx";
import { Info } from "../Components/Info/Info.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className={styles.content}>
        <Header />
        <About />
        <Stack />
      </div>
      <Projects />
      <Info />
      <hr />
      <Footer />
    </>
  );
}

export default App;
