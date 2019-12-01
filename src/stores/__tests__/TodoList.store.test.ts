import { todoListStore } from "../TodoList.store";
import { Item } from "../../shared/components/ListItem/ListItem.component";
import { Importances } from "../../shared/helpers/getListItemColor";

describe("TodoList.store", () => {
  const task: Item = {
    id: "1111-2222-3333-4444",
    isDone: false,
    title: "Todo test",
    importance: Importances.Low
  };

  const tasksAsArray: Item[] = [task];

  const tasks = {
    [task.id]: task
  };

  it("should update tasks", () => {
    expect(todoListStore.tasks).toEqual({});
    todoListStore.updateTasks(tasksAsArray);
    expect(todoListStore.tasks).toEqual(tasks);
  });

  it("should return tasks as array", () => {
    todoListStore.updateTasks(tasksAsArray);
    expect(todoListStore.tasksAsArray).toEqual(tasksAsArray);
  });

  it("should update loading", () => {
    expect(todoListStore.loading).toEqual(false);
    todoListStore.updateLoading(true);
    expect(todoListStore.loading).toEqual(true);
  });

  it("should update task", () => {
    todoListStore.updateTasks(tasksAsArray);
    expect(todoListStore.tasks).toEqual(tasks);

    todoListStore.updateTask(task.id, { ...task, isDone: true });

    expect(todoListStore.tasks[task.id]).toEqual({
      ...task,
      isDone: true
    });
  });

  it("should delete task", () => {
    todoListStore.updateTasks(tasksAsArray);
    expect(todoListStore.tasks).toEqual(tasks);

    todoListStore.deleteTask(task.id);

    expect(todoListStore.tasks[task.id]).toBeUndefined();
  });
});
