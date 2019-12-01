import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { TodoListContainer } from './modules/TodoList/containers/TodoList.container';
import { LoaderContainer } from './shared/containers/Loader/Loader.container';
import styled from 'styled-components';
import { Row } from './shared/components/Row';
import { AddTodoFormContainer } from './modules/TodoList/containers/AddTodoFormContainer';

const AddItemButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 30px;
  width: 150px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.24);
  background-color: white;
  border: none;

  p {
    font-size: 20px;
  }
`;

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <Row>
        <h1>Todo List</h1>
        <LoaderContainer />
        <AddItemButton onClick={() => stores.addTodoFormStore.updateShowForm(true)}>
          <i className="material-icons">add</i>
          <p>Add item</p>
        </AddItemButton>
      </Row>

      <AddTodoFormContainer />

      <TodoListContainer />
    </Provider>
  );
}

export default App;
