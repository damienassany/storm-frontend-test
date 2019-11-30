import { Stores } from "../../../stores";
import { Item, ItemFromApi } from "../../../shared/components/ListItem/ListItem.component";
import { todoListService } from "../services/TodoList.service";
import { TodoList } from "../components/TodoList.component";
import { inject } from "mobx-react";

export type TodoListProps = {
  tasks: Item[];
  fetchTasks(): void;
  update(id: string, data: Partial<ItemFromApi>): void;
};

const mapStoreToProps = (stores: Stores): TodoListProps => ({
    tasks: stores.todoListStore.tasksAsArray,
    fetchTasks: todoListService.fetchTasks,
    update: todoListService.updateTask
});

export const TodoListContainer = inject(mapStoreToProps)(TodoList);