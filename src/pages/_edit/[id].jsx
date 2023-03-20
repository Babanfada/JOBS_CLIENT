import { useRouter } from "next/router";
import Nav from "@/components/Navigation";
import PopperPopupState from "@/components/Popper";
import styles from "@/styles/edit.module.scss";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useGlobalContext } from "@/components/context/App";

const editDetails = () => {
  const { valuesdyn, setvaluesdyn } = useGlobalContext();
  const router = useRouter();
  const { id } = router.query;

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setvaluesdyn({ ...valuesdyn, [name]: value });
      console.log(valuesdyn);
  };

  const inputs = [
    {
      type: "text",
      name: "company",
      value: valuesdyn.company,
    },
    {
      type: "text",
      name: "position",
      value: valuesdyn.position,
    },
  ];
  const stata = [
    {
      value: "pending",
    },
    {
      value: "interview",
    },
    {
      value: "decline",
    },
  ];

  function SelectTextFields() {
    
    return (
      <TextField
        id="outlined-select-currency"
        select
        label="Status"
        defaultValue="pending"
        helperText="Please select your status"
        onChange={handleChange}
        value={valuesdyn.status}
      >
        {stata.map((status) => (
          <MenuItem key={status.value} value={status.value}>
            {status.value}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <div className={styles.wrapper}>
      <nav>
        <Nav />
        <PopperPopupState />
      </nav>
      <form>
        <Paper>
          {inputs.map((input, index) => {
            const { type, name, value } = input;
            return (
              <TextField
                key={index}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                variant="outlined"
                label={name}
              />
            );
          })}
        </Paper>
        <SelectTextFields />
      </form>
    </div>
  );
};

export default editDetails;

