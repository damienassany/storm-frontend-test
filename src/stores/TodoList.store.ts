import { observable, action, computed } from "mobx";
import { Item } from "../shared/components/ListItem/ListItem.component";

type Tasks = {
  [id: string]: Item;
};

export class TodoListStore {
  @observable loading: boolean = false;
  @observable tasks: Tasks = {};

  @computed
  get tasksAsArray() {
    return Object.values(this.tasks);
  }

  @action
  updateLoading(loading: boolean) {
    this.loading = loading;
  }

  @action
  updateTasks = (tasks: Item[]) => {
    this.tasks = tasks.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.id]: curr
      }),
      {}
    );
  };

  @action
  updateTask = (id: string, task: Item) => {
    this.tasks[id] = task;
  };
}

const todoListStore = new TodoListStore();

export { todoListStore };
