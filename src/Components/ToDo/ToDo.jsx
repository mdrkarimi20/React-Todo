import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import Task from "../Task/Task";
import { deleteList } from "../../Redux/ToDo/ToDoActions";

function ToDo({ list, history, deleteList }) {
  const [open, setOpen] = useState(false);

  const editButtonHandler = () => {
    history.push({
      pathname: `/update/${list.id}`,
      state: list,
    });
  };

  const deleteButtonHandler = () => {
    deleteList(list.id);
  };

  return (
    <Card>
      <CardHeader
        title={list.listTitle}
        action={
          <>
            <IconButton onClick={deleteButtonHandler}>
              <DeleteIcon color="error" />
            </IconButton>
            <IconButton onClick={editButtonHandler}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => setOpen(!open)} aria-label="collapse">
              {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </>
        }
      />
      <Collapse in={open}>
        {list.tasks.map((task) => (
          <Task key={task.id} title={task.title} done={task.done} listId={list.id} taskId={task.id} />
        ))}
      </Collapse>
    </Card>
  );
}

export default connect(null, { deleteList })(ToDo);
