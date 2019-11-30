import { ItemFromApi } from "../../../shared/components/ListItem/ListItem.component";
import { Service } from "../../../shared/helpers/service";
import { todoListStore } from "../../../stores/TodoList.store";

class TodoListService extends Service<ItemFromApi> {
    constructor() {
        super('task');
    }

    public fetchTasks = () => {
        this.getAll().then(_tasks => {
            const tasks = _tasks.map(task => ({
                ...task,
                isDone: task.isDone === "true"
            }));

            todoListStore.updateTasks(tasks);
        });
    }
}

const todoListService = new TodoListService();

export { todoListService };