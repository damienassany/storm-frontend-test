import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import { TodoListContainer } from './modules/TodoList/containers/TodoList.container';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <TodoListContainer />
    </Provider>
  );
}

export default App;
