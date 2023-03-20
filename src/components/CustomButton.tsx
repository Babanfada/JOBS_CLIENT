import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  cursor: "pointer",
  color: "#fff",
  background: "#645cff",
  border: " transparent",
  borderRadius: " 0.25rem",
  letterSpacing: "1px",
  padding: "0.375rem 0.75rem",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  transition: "0.3s ease-in-out all",
  textTransform: "capitalize",
  display: "inline-block",
  fontSize: "1.25rem",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#3c3799",
    // borderColor: "#0062cc",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1) 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
    borderColor: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export { BootstrapButton };
