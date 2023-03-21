import React from "react";
import { useGlobalContext } from "./context/App";
import TextField from "@mui/material/TextField";
import styles from "@/styles/dashboard.module.scss";

const FormRow2 = () => {
  const { createJob, addJob } = useGlobalContext();

  return createJob.map((job, index) => {
    return (
      <TextField
        key={index}
        style={{
          width: "40%",
          // height: "5vh",
          // marginBottom: "2vh",
          borderRadius: " 0.25rem",
          background: "#f8fafc",
        }}
        // className="border"
        name={job.name}
        id="outlined-basic"
        type={job.type}
        label={job.name}
        variant="outlined"
        value={job.value}
        onChange={addJob}
      />
    );
  });
};

export default FormRow2;
