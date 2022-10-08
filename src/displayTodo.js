export default function displayTodos(todoObject) {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("card");

  let titleContainer = document.createElement("p");
  titleContainer.classList.add("title");
  titleContainer.textContent = todoObject.todoTitle;

  let descriptConatiner = document.createElement("p");
  descriptConatiner.classList.add("descript");
  descriptConatiner.textContent = todoObject.todoDescription;

  let duedateContainer = document.createElement("p");
  duedateContainer.classList.add("duedate");
  duedateContainer.textContent = todoObject.todoDuedate;

  let priorityContainer = document.createElement("p");
  priorityContainer.classList.add("priority");
  priorityContainer.textContent = todoObject.todoPriority;

  let finishedContainer = document.createElement("p");
  finishedContainer.classList.add("finished");
  finishedContainer.textContent = `Finished: ${todoObject.todoFinished}`;

  let delTodoButton = document.createElement("button");
  delTodoButton.classList.add("delete", "todo");
  delTodoButton.textContent = "Delete";

  let editTodoButton = document.createElement("button");
  editTodoButton.textContent = "Edit";
  editTodoButton.classList.add("editTodo");

  todoDiv.append(
    titleContainer,
    descriptConatiner,
    duedateContainer,
    priorityContainer,
    finishedContainer,
    delTodoButton,
    editTodoButton
  );

  return todoDiv;
}
