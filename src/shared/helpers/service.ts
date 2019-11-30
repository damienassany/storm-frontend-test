import { requester } from "./requester";
import { todoListStore } from "../../stores/TodoList.store";

export class Service<T> {
    constructor(public modelName: string) {}

    public hideLoader = () => {
        setTimeout(() => {
            todoListStore.updateLoading(false);
        }, 500);
    };

    public showLoader = () => {
        todoListStore.updateLoading(true);
    }

    public getAll = (callback: (res: T[]) => void) => {
        this.showLoader();
        
        requester.get<T[]>(`/api/${this.modelName}`).then(res => {
            this.hideLoader();
            callback(res);
        });
    }

    public update = (id: string, data: Partial<T>, callback: (res: T) => void) => {
        this.showLoader();

        requester.patch<T>(`/api/${this.modelName}/${id}`, data).then(res => {
            this.hideLoader();
            callback(res);
        });
    }

    public create = (data: Partial<T>, callback: (res: any) => void) => {
        this.showLoader();

        requester.post<T>(`/api/${this.modelName}`, data).then(res => {
            this.hideLoader();
            callback(res);
        });
    }
} 
