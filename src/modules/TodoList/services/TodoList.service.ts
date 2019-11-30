import { ItemFromApi, Item } from "../../../shared/components/ListItem/ListItem.component";
import { Service } from "../../../shared/helpers/service";
import { todoListStore } from "../../../stores/TodoList.store";
import { addTodoFormStore } from "../../../stores/AddTodoForm.store";

class TodoListService extends Service<ItemFromApi> {
    constructor() {
        super('task');
    }

    public fetchTasks = () => {        
        this.getAll(_tasks => {
            const tasks = _tasks.map(task => ({
                ...task,
                isDone: task.isDone === "true"
            }));

            todoListStore.updateTasks(tasks);
        });
    };

    public updateTask = (id: string, data: Partial<ItemFromApi>) => {
        this.update(id, data, task => {
            todoListStore.updateTask(id, {...task, isDone: task.isDone === "true"});
        });
    };

    public addTask = (data: Partial<ItemFromApi>) => {
        this.create(data, task => {
            todoListStore.updateTask(task.id, {...task, isDone: task.isDone === "true"});
            addTodoFormStore.updateShowForm(false);
            addTodoFormStore.updateTitle('');
            addTodoFormStore.updateImportance("");
        });
    }
}

const todoListService = new TodoListService();

export { todoListService };