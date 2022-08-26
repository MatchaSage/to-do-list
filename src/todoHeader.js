export default function todoHeader() {
    let container = document.createElement('div');
    container.classList.add('todo', 'header');

    let todoButton = document.createElement('button');
    todoButton.classList.add('todo', 'button');
    todoButton.textContent = 'New Todo';

    let categoryButton = document.createElement('button');
    categoryButton.classList.add('category', 'button');
    categoryButton.textContent = 'New Category';

    container.append(todoButton, categoryButton);

    return container;
}