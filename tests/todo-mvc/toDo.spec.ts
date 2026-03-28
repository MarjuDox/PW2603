import { randomInt } from 'node:crypto';
import { test, expect } from './fixtures/todo-mvc.fixtures';

test.describe('ToDo MVC Tests', () => {
    test.beforeEach(async ({ toDo }) => {
        await toDo.navigate();
    });

    test('should create a new todo item', async ({ toDo }) => {
        const newToDoText = 'Buy groceries';
        await toDo.createToDo(newToDoText);
        const toDoList = await toDo.getToDoList();
        expect(toDoList).toContain(newToDoText);
    });

    test('should mark a todo item as completed', async ({ toDo }) => {
        const toDoText = 'Buy groceries';
        await toDo.createToDo(toDoText);
        await toDo.completedToDo(toDoText);
        const completedToDos = await toDo.getCompleteToDoText();
        expect(completedToDos).toContain(toDoText);
    });

    test('should delete a todo item', async ({ toDo }) => {
        const toDoText = 'Buy groceries';
        await toDo.createToDo(toDoText);
        await toDo.deleteToDo(toDoText);
        const toDoList = await toDo.getToDoList();
        expect(toDoList).not.toContain(toDoText);
    });

    // test('should update a todo item', async ({ toDo }) => {
    //     const toDoListDetailed = await toDo.getToDoListDetailed();
    //     const n = toDoListDetailed.length;
    //     const oldText = randomInt(0,n > 0 ? n : 1) === 0 ? 'Unknown' : toDoListDetailed[randomInt(0, n)].text;
    //     const newText = 'Buy fruits';
    //     await toDo.createToDo(oldText);
    //     await toDo.updateToDo(oldText, newText);
    //     const toDoList = await toDo.getToDoList();
    //     expect(toDoList).toContain(newText);
    //     expect(toDoList).not.toContain(oldText);
    // });
});