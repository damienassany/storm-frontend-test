import { requester } from "./requester";
import { todoListStore } from "../../stores/TodoList.store";

export class Service<T> {
    constructor(public modelName: string) {}

    public getAll(callback: (res: T[]) => void) {
        todoListStore.updateLoading(true);
        
        requester.get<T[]>(`/api/${this.modelName}`).then(res => {
            todoListStore.updateLoading(false);
            callback(res);
        });
    }

    public get(id: string) {
        return requester.get<T>(`/api/${this.modelName}/${id}`);
    }
} 
