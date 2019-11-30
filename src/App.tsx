import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { TodoListContainer } from './modules/TodoList/containers/TodoList.container';
import { LoaderContainer } from './shared/containers/Loader/Loader.container';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direciton: row;
`;  

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <Row>
        <h1>Todo List</h1>
        <LoaderContainer />
      </Row>
      <TodoListContainer />
    </Provider>
  );
}

export default App;
