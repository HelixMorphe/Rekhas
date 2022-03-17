import { Header } from "../components/Header";
import Contact from "../components/Contact";
import { CategoryList } from "../components/CategoryList";
import styles from "../styles/Home.module.css";
import { BrowseBy } from "../components/BrowseBy";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Contact />
      {/* <BrowseBy/> */}
      <CategoryList />
    </div>
  );
}
