import { addTodoFormStore } from "../AddTodoForm.store";
import { Importances } from "../../shared/helpers/getListItemColor";

describe('AddTodoForm.store', () => {
    it('should update title', () => {
        expect(addTodoFormStore.title).toEqual('');
        addTodoFormStore.updateTitle('title');
        expect(addTodoFormStore.title).toEqual('title');
    });

    it('should update importance', () => {
        expect(addTodoFormStore.importance).toEqual(Importances.Low);
        addTodoFormStore.updateImportance(Importances.High.toString());
        expect(addTodoFormStore.importance).toEqual(Importances.High);
    });

    it('should update showForm', () => {
        expect(addTodoFormStore.showForm).toEqual(false);
        addTodoFormStore.updateShowForm(true);
        expect(addTodoFormStore.showForm).toEqual(true);
    });

    it('should return a computed todo', () => {
        addTodoFormStore.updateTitle('title');
        addTodoFormStore.updateImportance(Importances.High.toString());
        expect(addTodoFormStore.todo).toEqual({
            title: 'title',
            importance: Importances.High
        });
    });
});