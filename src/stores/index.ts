import { todoListStore, TodoListStore } from "./TodoList.store";
import { AddTodoFormStore, addTodoFormStore } from "./AddTodoForm.store";

export type Stores = {
  todoListStore: TodoListStore;
  addTodoFormStore: AddTodoFormStore;
};

export default {
  todoListStore,
  addTodoFormStore
};
