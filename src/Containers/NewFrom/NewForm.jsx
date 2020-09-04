import React, { useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { addList } from "../../Redux/ToDo/ToDoActions";

const useStyle = makeStyles({
  root: {
    width: "100%",
    marginTop: "2rem",
    borderRadius: "0.7rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: `'Yekan !important'`,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #cb51fe 10%, #4d91df 100%)",
    fontFamily: `'Yekan !important'`,
  },
  input: {
    width: "300px",
    margin: "2rem 0",
    backgroundColor: "transparent",
    fontFamily: `'Yekan !important'`,
  },
  link: {
    textDecoration: "none !important",
    backgroundColor: "transparent",
  },
  button: {
    margin: "1rem",
    backgroundImage: "linear-gradient(to right, #fb80e2 10%, #64e4ef 100%)",
    color: "white",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
});

function NewFrom({ addList }) {
  const history = useHistory();
  const classes = useStyle();

  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([""]);

  const taskChangeHandler = (event, index) => {
    const newTasks = [...tasks];
    newTasks[index] = event.target.value;
    setTasks(newTasks);
  };

  const submitHandler = () => {
    const newList = {
      id: uniqid(),
      listTitle: title,
      tasks: tasks.map((item) => ({ id: uniqid(), title: item, done: false })),
    };
    addList(newList);
    history.push("/");
  };

  return (
    <Card data-aos={"fade-right"} className={classes.form}>
      <Box className={classes.root}>
        <Grid className={classes.form} container>
          <Box>
            <Grid className={classes.background} item xs={12}>
              <TextField className={classes.input} label="List Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Grid>
          </Box>
        </Grid>
        <Grid className={classes.form} container>
          {tasks.map((task, index) => (
            <Grid className={classes.background} item key={index} xs={12}>
              <TextField
                className={classes.input}
                label={`task ${index + 1}`}
                variant="outlined"
                value={task}
                onChange={(e) => taskChangeHandler(e, index)}
              />
            </Grid>
          ))}
          <Grid className={classes.background} item xs={12}>
            <Link to="/" className={classes.link}>
              <Button className={classes.button} variant="contained" color="secondary">
                cancel
              </Button>
            </Link>
            <Button className={classes.button} variant="contained" color="primary" onClick={submitHandler}>
              submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default connect(null, { addList })(NewFrom);
