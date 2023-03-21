import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

export default function IconAlerts() {
  return (
    <Alert
      severity="warning"
      iconMapping={{
        success: <CheckCircleOutlineIcon fontSize="inherit" />,
      }}
    >
      Delete Successful!
    </Alert>
  );
}
export function IconAlerts2() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Edit Successful!
    </Alert>
  );
}
