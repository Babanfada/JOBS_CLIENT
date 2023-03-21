import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGlobalContext } from "./context/App";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import { pink } from "@mui/material/colors";
import Link from "next/link";
// import {styled as styling} from "styled-components";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e2e8f0",
    // backgroundColor: theme.palette.common.black,
    color: "#64748b",
    // color: theme.palette.common.black,
    fontSize: 15,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const { jobs, fetchJobs, deleteJob } = useGlobalContext();
  React.useEffect(() => {
    fetchJobs();
  }, []);
  const handleDelete = (id) => {
    // e.preventDefault();
    deleteJob(id);
  };
  const styleEmpty = {
    textAlign: "center",
    padding: "10vh 5vw",
    border: "1px solid red",
    color: "#0f5132",
    fontSize: 20,
    fontFamily: "Roboto Condensed', sans-serif",
  };
  if (jobs.length < 1) {
    return (
      <Paper>
        <h5 style={styleEmpty}>
          Currently, you have no <span style={{ color: "#842029" }}>JOBS </span>
          to display
        </h5>
      </Paper>
    );
  }
  const STYLE = {
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "medium",
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell align="left">Company</StyledTableCell>
            <StyledTableCell align="left">Data</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => {
            const { _id: id, position, company, status, createdAt } = job;
            const setStatusColor = (status) => {
              if (status === "interview") return "#0f5132";
              if (status === "decline") return "#842029";
              return "#927238";
            };
            const setStatusBackground = (status) => {
              if (status === "interview") return "#d1e7dd";
              if (status === "decline") return "#f8d7da";
              return "#f7f3d7";
            };
            let date = moment(createdAt);
            date = date.format("MMMM Do, YYYY");
            return (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  {position.charAt(0).toUpperCase() +
                    position.slice(1).toLowerCase()}
                </StyledTableCell>
                <StyledTableCell align="left">{company}</StyledTableCell>
                <StyledTableCell align="left">{date}</StyledTableCell>
                <StyledTableCell align="left">
                  <span
                    style={{
                      color: setStatusColor(status),
                      background: setStatusBackground(status),
                      padding: "5px",
                      borderRadius: "3px",
                      fontSize: "12px",
                    }}
                  >
                    {status}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Stack
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                    direction={"row"}
                    spacing={2}
                  >
                    <Link href={`/_edit/${id}`}>
                      <EditIcon sx={STYLE} color="success" />
                    </Link>
                    <button style={STYLE} onClick={() => handleDelete(id)}>
                      <DeleteIcon style={STYLE} sx={{ color: pink[500] }} />
                    </button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// const EmptyContainer = styling.section`
//   text-align: center;
//   h5 {
//     text-transform: none;
//   }
//   span {
//     color: var(--primary-500);
//   }
// `;
