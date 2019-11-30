import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { TodoListContainer } from './modules/TodoList/containers/TodoList.container';
import { LoaderContainer } from './shared/containers/Loader/Loader.container';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <div>
        <h1>Todo List</h1>
        <LoaderContainer />
      </div>
      <TodoListContainer />
    </Provider>
  );
}

export default App;
