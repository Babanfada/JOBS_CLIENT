import * as React from "react";
import TextField from "@mui/material/TextField";
import { useGlobalContext } from "./context/App";
import styled from "styled-components";
export default function FormRow() {
  let { memberDetails, values } = useGlobalContext();

  const removeMember = () => {
    if (values.isMember) {
      memberDetails = memberDetails.slice(1);
      // console.log(memberDetails);
    }
  };
  removeMember();

  return memberDetails.map((member, index) => {
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
          name={member.name}
          id="outlined-basic"
          type={member.type}
          label={member.type}
          variant="outlined"
          value={member.value}
          onChange={member.handleChange}
        />
      </div>
    );
  });
}

const Wrapper = styled.div`
  .border {
    width: 100%;
    margin-bottom: 2vh;

    // border: 1px solid red;
  }
`;
