import { expect, type Locator, type Page } from '@playwright/test';

export class ToDoPage {
    readonly page: Page;
    readonly newToDoInput: Locator;
    readonly toDoList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newToDoInput = page.locator('.new-todo');
        this.toDoList = page.locator('.todo-list li');
    }

    async createToDo(toDoText: string) {
        await this.newToDoInput.fill(toDoText);
        await this.newToDoInput.press('Enter');
    }

    async completedToDo(toDoText:string){
        const toDoItem = this.toDoList.filter({ hasText: toDoText });
        await toDoItem.locator('.toggle').click(); 
    }

    async deleteToDo(toDoText: string) {
        const toDoItem = this.toDoList.filter({ hasText: toDoText });
        await toDoItem.hover(); // Make the destroy button visible
        await toDoItem.locator('.destroy').click();
    }

    async getToDoList() {
        return this.toDoList.allTextContents();
    }

    async getToDoListDetailed() {
        const todoElements = await this.toDoList.elementHandles();
        const todoItems = [];

        for (const element of todoElements) {
            const text = await element.textContent() || '';
            const isCompleted = await element.evaluate((el: HTMLElement) => el.classList.contains('completed'));

            todoItems.push({
                text: text.trim(),
                completed: isCompleted,
                element: element
            });
        }

        return todoItems;
    }

    async getCompleteToDoText() {
        const allTodos = await this.getToDoListDetailed();
        return allTodos.filter(todo => todo.completed).map(todo => todo.text);
    }

    async updateToDo(oldText: string, newText: string){
        const toDoItem = this.toDoList.filter({hasText: oldText});
        await toDoItem.dblclick();
        const editInput = toDoItem.locator('input.edit');
        await expect(editInput).toBeVisible();
        await editInput.fill(newText);
        await editInput.press('Enter');
    }

    async navigate() {
        await this.page.goto(`https://todomvc.com/examples/react/dist`);
    }
}