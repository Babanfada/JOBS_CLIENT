import Header from "@/components/Head";
import Nav from "@/components/Navigation";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import main from "../asset/main.svg";
import styles from "../styles/home.module.scss";
// import { red } from "@mui/material/colors";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.div}>
          <Textarea />
          <Image className={styles.img} src={main} alt="logo" />
        </div>
      </div>
    </>
  );
}
