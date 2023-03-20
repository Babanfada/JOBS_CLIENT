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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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
  if (jobs.length < 1) {
    return (
      <Paper>
        <h5>
          Currently, you have no <span>JOBS </span>
          to display
        </h5>
      </Paper>
    );
  }
  const STYLE = {
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">Data</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => {
            const { _id: id, position, company, status, createdAt } = job;
            const setStatusColor = (status) => {
              if (status === "interview") return "#0f5132";
              if (status === "declined") return "#842029";
              return "#927238";
            };
            const setStatusBackground = (status) => {
              if (status === "interview") return "#d1e7dd";
              if (status === "declined") return "#f8d7da";
              return "#f7f3d7";
            };
            let date = moment(createdAt);
            date = date.format("MMMM Do, YYYY");
            return (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  {position.toUpperCase()}
                </StyledTableCell>
                <StyledTableCell align="right">{company}</StyledTableCell>
                <StyledTableCell align="right">{date}</StyledTableCell>
                <StyledTableCell align="right">
                  <span
                    style={{
                      color: setStatusColor(status),
                      background: setStatusBackground(status),
                      padding: "5px",
                      borderRadius: "3px",
                    }}
                  >
                    {status}
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  <Stack
                    align="right"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                    direction={"row"}
                    spacing={2}
                  >
                    <Link href={`/_edit/${id}`}>
                      <EditIcon sx={STYLE} color="success" />
                    </Link>
                    <button style={STYLE} onClick={() => handleDelete(id)}>
                      <DeleteIcon sx={{ color: pink[500] }} />
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
