export default function displayTodos(todoObject) {
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('card');

    let titleContainer = document.createElement('p');
    titleContainer.classList.add('title');
    titleContainer.textContent = todoObject.title;

    let descriptConatiner = document.createElement('p');
    descriptConatiner.classList.add('descript');
    descriptConatiner.textContent = todoObject.descript

    let duedateContainer = document.createElement('p');
    duedateContainer.classList.add('duedate');
    duedateContainer.textContent = todoObject.dueDate

    let priorityContainer = document.createElement('p');
    priorityContainer.classList.add('priority');
    priorityContainer.textContent = todoObject.priority;

    todoDiv.append(titleContainer, descriptConatiner, duedateContainer, priorityContainer);

    return todoDiv;
}