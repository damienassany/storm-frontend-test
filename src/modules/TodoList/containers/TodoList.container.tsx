import { Stores } from "../../../stores";
import { Item, ItemFromApi } from "../../../shared/components/ListItem/ListItem.component";
import { todoListService } from "../services/TodoList.service";
import { TodoList } from "../components/TodoList.component";
import { inject } from "mobx-react";
import { todoListStore } from "../../../stores/TodoList.store";

export type TodoListProps = {
  tasks: Item[];
  fetchTasks(): void;
  update(id: string, data: Partial<ItemFromApi>): void;
  delete(id: string): void;
  loading: boolean;
};

const mapStoreToProps = (stores: Stores): TodoListProps => ({
    tasks: stores.todoListStore.tasksAsArray,
    fetchTasks: todoListService.fetchTasks,
    update: todoListService.updateTask,
    delete: todoListService.deleteTask,
    loading: todoListStore.loading
});

export const TodoListContainer = inject(mapStoreToProps)(TodoList);