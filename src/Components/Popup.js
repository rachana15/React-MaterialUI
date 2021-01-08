import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ActionButton from "./ActionButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Popup({ title, children, open, setOpenPopup }) {
  const classes = useStyles();
    const handleClose = () => {
      
    open = false;
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      //   classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div className={classes.dialogHeader}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <ActionButton color="secondary" onClick={() => setOpenPopup(false)}>
            <CloseIcon />{" "}
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
