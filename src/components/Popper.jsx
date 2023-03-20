import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useGlobalContext } from "./context/App";
export default function PopperPopupState() {
  const { user, logout } = useGlobalContext();
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            {...bindToggle(popupState)}
            endIcon={<ArrowDropDownIcon />}
            startIcon={<AccountCircleIcon />}
          >
            {user && user.name}
            {/* {user && user.email} */}
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                {/* <Paper> */}
                <Typography sx={{ p: 2 }}>
                  <Button onClick={logout} variant="contained">
                    logout
                  </Button>
                </Typography>
                {/* </Paper> */}
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}
