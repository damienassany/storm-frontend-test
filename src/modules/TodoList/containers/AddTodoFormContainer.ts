import { Importances } from "../../../shared/helpers/getListItemColor";
import { Stores } from "../../../stores";
import { inject } from "mobx-react";
import { AddTodoForm } from "../components/AddTodoForm";
import { ItemFromApi } from "../../../shared/components/ListItem/ListItem.component";
import { todoListService } from "../services/TodoList.service";

export type Todo = {
    title: string;
    importance: Importances;
}

export type AddTodoFormProps = {
    todo: Todo;
    updateTitle(title: string): void;
    updateImportance(importance: string): void;
    showForm: boolean;
    addTodo(todo: Partial<ItemFromApi>): void;
}

const mapStoreToProps = (stores: Stores): AddTodoFormProps => ({
    updateImportance: stores.addTodoFormStore.updateImportance,
    updateTitle: stores.addTodoFormStore.updateTitle,
    showForm: stores.addTodoFormStore.showForm,
    addTodo: todoListService.addTask,
    todo: stores.addTodoFormStore.todo
});

export const AddTodoFormContainer = inject(mapStoreToProps)(AddTodoForm);