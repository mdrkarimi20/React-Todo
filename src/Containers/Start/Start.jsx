import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ToDo from "../../Components/ToDo/ToDo";
import AddTodo from "../../Components/AddTodo/AddTodo";
import { CSSTransition } from "react-transition-group";
import "./Start.scss";

function Start({ history }) {
  const lists = useSelector((state) => state.ToDo.lists);

  return (
    <CSSTransition appear in classNames="page-transition" timeout={500}>
    <main>
      <List data-aos={"fade-right"}>
        {lists.map((list) => (
          <ToDo key={list.id} list={list} history={history} />
        ))}
      </List>
      <AddTodo className="start-list"/>
    </main>
    </CSSTransition>
  );
}

export default Start;
