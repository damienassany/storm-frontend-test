import { Item } from "../../../shared/components/ListItem/ListItem.component";
import { Service } from "../../../shared/helpers/service";
import { todoListStore } from "../../../stores/TodoList.store";

class TodoListService extends Service<Item> {
    constructor() {
        super('task');
    }

    public fetchTasks = () => {
        this.getAll().then(todoListStore.updateTasks);
    }
}

const todoListService = new TodoListService();

export { todoListService };