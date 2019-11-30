import { observable, action } from 'mobx';
import { Item } from "../shared/components/ListItem/ListItem.component";

export class TodoListStore {
    @observable
    loading: boolean = false;

    @action
    updateLoading(loading: boolean) {
        this.loading = loading;
    }

    @observable
    tasks: Item[] = [];

    @action
    updateTasks= (tasks: Item[]) => {
        this.tasks = tasks;
    }
}

const todoListStore = new TodoListStore();

export { todoListStore };