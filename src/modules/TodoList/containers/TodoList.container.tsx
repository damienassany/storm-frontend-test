import { Stores } from "../../../stores";
import { Item } from "../../../shared/components/ListItem/ListItem.component";
import { todoListService } from "../services/TodoList.service";
import { TodoList } from "../components/TodoList.component";
import { inject } from "mobx-react";

export type TodoListProps = {
  tasks: Item[];
  fetchTasks(): void;
};

const mapStoreToProps = (stores: Stores): TodoListProps => ({
    tasks: stores.todoListStore.tasks,
    fetchTasks: todoListService.fetchTasks
});

export const TodoListContainer = inject(mapStoreToProps)(TodoList);