import React, { useEffect } from "react";
import { TodoListProps } from "../containers/TodoList.container";
import { observer } from "mobx-react";
import { ListItem } from "../../../shared/components/ListItem/ListItem.component";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px;
`;

export const TodoList = observer(props => {
  const { fetchTasks, tasks, update, delete: deleteTask, loading } = props as TodoListProps;

  useEffect(fetchTasks, []);

  const noTasks = tasks.length === 0;

  return (
    <List>
      {(noTasks && !loading) && <p>You didn't add any todo yet.</p>}
      {tasks.map(task => (
        <li key={task.id}>
          <ListItem item={task} update={update} deleteTask={deleteTask} />
        </li>
      ))}
    </List>
  );
});
