import { observable, action, computed } from "mobx";
import { Importances } from "../shared/helpers/getListItemColor";
import { Item } from "../shared/components/ListItem/ListItem.component";
import { Todo } from "../modules/TodoList/containers/AddTodoFormContainer";

export class AddTodoFormStore {
    @observable title: string = "";
    @observable importance: Importances = Importances.Low;
    @observable showForm: boolean = false;

    @computed
    get todo(): Todo {
        return {
            title: this.title,
            importance: this.importance
        };
    }

    @action
    updateTitle = (title: string) => {        
        this.title = title;
    }

    @action
    updateImportance = (importance: string) => {        
        this.importance = parseInt(importance);
    }

    @action
    updateShowForm = (showForm: boolean) => {
        this.showForm = showForm;
    }
}

const addTodoFormStore = new AddTodoFormStore();

export { addTodoFormStore };