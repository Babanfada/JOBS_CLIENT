import React from "react";
import { useGlobalContext } from "@/components/context/App";
import Auth from "../components/Auth";
import styles from "../styles/dashboard.module.scss";
import Nav from "@/components/Navigation";
import PopperPopupState from "@/components/Popper";
import CustomizedTables from "@/components/Jobs";
import FormRow2 from "../components/FormRow2";
import { BootstrapButton } from "@/components/CustomButton";
import Paper from "@mui/material/Paper";
import IconAlerts from "@/components/Snack";

const dashboard = () => {
  const {
    CREATEJOB,
    details,
    setdetails,
    showAlert,
    jobs,
    isLoading,
    isDeleted,
  } = useGlobalContext();
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
      {isDeleted && <IconAlerts deleted={isDeleted} />}
      <Paper sx={{ width: "90vw", margin: "0 5vw" }}>
        <form onSubmit={handleSubmit}>
          <FormRow2 />
          <BootstrapButton type="submit">
            {isLoading ? "Adding New Job..." : "Add Job"}
          </BootstrapButton>
        </form>
      </Paper>
      <div className={styles.table}>
        <CustomizedTables />
      </div>
    </div>
  );
};

export default Auth(dashboard);
