import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 'calc(100vh - 20px)',
  },
  paper: {
    width: 190,
    height: 190,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    "& > div": {
      margin: 10
    }
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <CircularProgress size={50} />
        <Typography component="div" variant="body2" align="center">
            Loading... Please wait
          </Typography>
      </Paper>
    </div>
  );
}
