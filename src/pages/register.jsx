import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import logo from "@/asset/logo.svg";
import styles from "@/styles/register.module.scss";
import FormRow from "@/components/FormRow";
import { useGlobalContext } from "@/components/context/App";
import { BootstrapButton } from "@/components/CustomButton";
const register = ({}) => {
  const { values, toggleMember, showAlert, onSubmit, isLoading, user } =
    useGlobalContext();
  const router = useRouter();

  // user == null && router.push("dashboard");

  return (
    <>
      <div className={styles.wrapper}>
        {showAlert && (
          <div className="alert alert-danger">
            there was an error, please try again
          </div>
        )}
        <form onSubmit={onSubmit} className={"form"}>
          <div className={styles.div}>
            <Image src={logo} alt={"logo"} />
            <h4>{values.isMember ? "Login" : "Register"}</h4>
          </div>
          <FormRow />
          <BootstrapButton
            type="submit"
            sx={{ width: "100%", marginBottom: "10px" }}
          >
            {isLoading ? "Fetching user..." : "submit"}
          </BootstrapButton>
          <p style={{ textAlign: "center" }}>
            {values.isMember ? "Not yet a member" : "Already a member"}{" "}
            <button className={styles.button} onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default register;
