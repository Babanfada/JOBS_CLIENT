import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/textarea.module.scss";
import { BootstrapButton } from "./CustomButton";
const Textarea = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Job Tracking App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias
        sequi, id ipsa praesentium voluptate? Perferendis molestiae explicabo,
        atque voluptate error, distinctio debitis, eos quos vero illum neque
        sapiente praesentium!
      </p>
      <Link href={"/register"}>
        <BootstrapButton>Register/Login</BootstrapButton>
      </Link>
    </div>
  );
};

export default Textarea;
