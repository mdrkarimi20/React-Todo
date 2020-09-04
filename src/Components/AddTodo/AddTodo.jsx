import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  outline: {
    outline: "none !important",
  },
});

function AddTodo() {

  const classes = useStyle();
  return (
    <Link to="/add">
      <Fab className={classes.outline} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
}

export default AddTodo;
