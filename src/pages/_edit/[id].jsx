import { useRouter } from "next/router";
import Nav from "@/components/Navigation";
import PopperPopupState from "@/components/Popper";
import styles from "@/styles/edit.module.scss";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useGlobalContext } from "@/components/context/App";
import { BootstrapButton } from "@/components/CustomButton";
import Link from "next/link";
import { Skeleton, Slide, Stack } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Auth from "@/components/Auth";
import { IconAlerts2 } from "@/components/Snack";
const editDetails = () => {
  const {
    valuesdyn,
    setvaluesdyn,
    editJob,
    isLoading,
    editComplete,
    fetchSingleJob,
    editItem,
    user,
    singleJobError,
    open,
    setOpen,
    transition,
    setTransition,
  } = useGlobalContext();

  const router = useRouter();
  const { id } = router.query;
  //   console.log(router);

  React.useEffect(() => {
    fetchSingleJob(id);
  }, [id]);

  React.useEffect(() => {
    if (editItem) {
      const { company, position, status } = editItem;
      setvaluesdyn({ company, position, status });
    }
  }, [editItem]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setvaluesdyn({ ...valuesdyn, [name]: value });
    console.log(valuesdyn);
  };
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
  const STYLE = {
    width: "100%",
  };

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }

  const handleClick = (Transition) => {
    setTransition(() => Transition);
    setOpen(true);
    console.log("inside handle click");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = router.query;
    const { company, position, status } = valuesdyn;
    if (company && position) {
      console.log(id);
      editJob(id, { company, position, status });
      setvaluesdyn({ company: "", position: "" });
      handleClick(TransitionDown);
    }
  };

  function SelectTextFields() {
    return (
      <TextField
        style={STYLE}
        id="outlined-select-currency"
        select
        name="status"
        label="Status"
        defaultValue="pending"
        // helperText="Please select your status"
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

  //   if (!editItem || singleJobError) {
  //     return (
  //       <>
  //         {/* {!user && <Redirect to="/" />} */}
  //         <div className={styles.page}>
  //           <Link href="/dashboard">
  //             <KeyboardBackspaceIcon />
  //           </Link>
  //           <h5>There was an error, please double check your job ID</h5>
  //         </div>
  //       </>
  //     );
  //   }

  return (
    <div className={styles.wrapper}>
      <nav>
        <Nav />
        <PopperPopupState />
      </nav>
      {isLoading && !editItem ? (
        <Stack
          style={{ display: "grid", placeItems: "center" }}
          direction={"row"}
          spacing={5}
        >
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rectangular" width={210} height={60} />
        </Stack>
      ) : (
        <section>
          <header>
            <Link title={"Go Back"} href="/dashboard">
              <KeyboardBackspaceIcon />
            </Link>
            <p>{editComplete ? <IconAlerts2 /> : ""}</p>
          </header>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Paper className={styles.paper}>
              <Stack className={styles.div} spacing={2}>
                <TextField
                  style={STYLE}
                  type={"text"}
                  name={"company"}
                  value={valuesdyn.company}
                  onChange={handleChange}
                  variant="outlined"
                  label={"company"}
                />
                <TextField
                  type={"text"}
                  name={"position"}
                  value={valuesdyn.position}
                  onChange={handleChange}
                  variant={"outlined"}
                  label={"position"}
                  style={STYLE}
                />
                <SelectTextFields />
              </Stack>
              <BootstrapButton
                className={styles.btn}
                type={"submit"}
                disabled={isLoading}
              >
                {isLoading ? "Editng..." : "Edit"}
              </BootstrapButton>
            </Paper>
          </form>
        </section>
      )}
    </div>
  );
};

export default Auth(editDetails);
