import * as React from "react";
// import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { Button, IconButton, Snackbar } from "@mui/material";
import { useGlobalContext } from "./context/App";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function IconAlerts() {
  const { open, setOpen, transition, setTransition } = useGlobalContext();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={transition}
      message="I love snacks"
      key={transition ? transition.name : ""}
      action={action}
    >
      <Alert
        severity="warning"
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        Delete Successful!
      </Alert>
    </Snackbar>
  );
}
export function IconAlerts2() {
  const { open, setOpen, transition, setTransition } = useGlobalContext();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      TransitionComponent={transition}
      message="I love snacks"
      key={transition ? transition.name : ""}
      action={action}
    >
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Edit Successful!
      </Alert>
    </Snackbar>
  );
}

