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
  const { fetchTasks, tasks } = props as TodoListProps;

  useEffect(fetchTasks, []);

  return (
    <List>
      {tasks.map(task => (
        <li key={task.id}>
          <ListItem item={task} onCheck={() => null} onUncheck={() => null} />
        </li>
      ))}
    </List>
  );
});
