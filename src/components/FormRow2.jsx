import React from "react";
import { useGlobalContext } from "./context/App";
import TextField from "@mui/material/TextField";
const FormRow2 = () => {
  const { createJob, addJob } = useGlobalContext();
  return createJob.map((job, index) => {
    return (
      <div key={index}>
        <TextField
          style={{
            width: "100%",
            marginBottom: "2vh",
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
      </div>
    );
  });
};

export default FormRow2;
