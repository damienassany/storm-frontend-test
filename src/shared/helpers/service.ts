import { requester } from "./requester";

export class Service<T> {
    constructor(public modelName: string) {}

    public getAll() {
        return requester.get<T[]>(`/api/${this.modelName}`);
    }

    public get(id: string) {
        return requester.get<T>(`/api/${this.modelName}/${id}`);
    }
} 
