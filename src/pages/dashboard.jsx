import React from "react";
import { useGlobalContext } from "@/components/context/App";
import Auth from "../components/Auth";
import styles from "../styles/dashboard.module.scss";
import Nav from "@/components/Navigation";
import PopperPopupState from "@/components/Popper";
import CustomizedTables from "@/components/Jobs";
import FormRow2 from "../components/FormRow2";
import { BootstrapButton } from "@/components/CustomButton";
const dashboard = () => {
  const { CREATEJOB, details, setdetails, showAlert, jobs } =
    useGlobalContext();
  const { company, position } = details;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company && position) {
      CREATEJOB(details);
      setdetails({ company: "", position: "" });
    }
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        <Nav />
        <PopperPopupState />
      </nav>
      {showAlert && (
        <div className="alert alert-danger">
          there was an error, please try again
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormRow2 />
        <BootstrapButton type="submit">ADD JOB</BootstrapButton>
      </form>
      <div>
        <CustomizedTables />
      </div>
    </div>
  );
};

export default Auth(dashboard);
