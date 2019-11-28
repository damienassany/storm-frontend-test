import { observable, action } from 'mobx';
import { Item } from "../shared/components/ListItem/ListItem.component";

export class TodoListStore {
    @observable
    tasks: Item[] = [];

    @action
    updateTasks= (tasks: Item[]) => {
        this.tasks = tasks;
    }
}

const todoListStore = new TodoListStore();

export { todoListStore };