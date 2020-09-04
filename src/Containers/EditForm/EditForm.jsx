import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { updateList } from "../../Redux/ToDo/ToDoActions";
// import { CSSTransition } from "react-transition-group";

const useStyle = makeStyles({
  root: {
    width: "100%",
    marginTop: "2rem",
    marginBottom: "1rem",
    borderRadius: "0.7rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  form: {
    width: "100%",
    display: "flex",
        flexDirection: "column",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #cb51fe 10%, #4d91df 100%)",
  },
  input: {
    width: "300px",
    margin: "2rem 0",
    backgroundColor: "transparent",
  },
  link: {
    textDecoration: "none !important",
    backgroundColor: "transparent",
  },
  button: {
    margin: "1rem",
    backgroundImage: "linear-gradient(to right, #fb80e2 10%, #64e4ef 100%)",
    color: "white",
    outline: "none",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background:{
    backgroundColor: "transparent",
  },
});

function EditForm({ location, updateList }) {
  const history = useHistory();
  const classes = useStyle();

  const [title, setTitle] = useState(location.state.listTitle);
  const [tasks, setTasks] = useState(location.state.tasks);

  const taskChangeHandler = (event, index) => {
    const newTasks = [...tasks];
    newTasks[index].title = event.target.value;
    setTasks(newTasks);
  };

  const submitHandler = () => {
    const newList = {
      id: location.state.id,
      listTitle: title,
      tasks: tasks,
    };
    updateList(location.state.id, newList);
    history.push("/");
  };

  return (
    <Box data-aos={"fade-left"} className={classes.root}>
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
              value={task.title}
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
  );
}

export default connect(null, { updateList })(EditForm);
