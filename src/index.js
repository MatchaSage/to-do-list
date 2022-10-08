import "./style.css";
import displayCategories from "./displayCategories";
import handleTodo from "./handleTodo";
import handleCategory from "./handleCategory";
import displayTodos from "./displayTodo";
import checkTodo from "./checkTodo";
import deleteTodo from "./deleteTodo";
import editTodo from "./editTodo";

let newCategoryButton = document.querySelector(".new.category.button");
let newTodoButton = document.querySelector(".new.todo");

let cancelCategory = document.querySelector(".cancel.category");
let categoryForm = document.getElementById("newCategory");
let todoForm = document.getElementById("newTodo");
let cancelTodo = document.querySelector(".cancel.todo");
let todoSubmit = document.getElementById("newTodo");
let categorySubmit = document.getElementById("newCategory");
//Sets current category for use later for selecting where to store created todos
let currentCategory = document.querySelector(".category.Default");
let todoHeaderText = document.querySelector(".todo.text");
let cardContainer = document.querySelector(".card.container");
let categoryList = document.querySelector(".category.list").children;

let todoArray = [];
let cardArray = [];

document.body.addEventListener("click", function (event) {
  if (event.target.className == "delete todo") {
    let cardIndex = cardArray.indexOf(event.target.parentNode);
    deleteTodo(cardArray, todoArray, cardIndex);
    checkTodo(cardArray, currentCategory);
  }
});

document.body.addEventListener("click", function (event) {
  if (event.target.className == "editTodo") {
    editTodo(todoArray, cardArray, event.target);
  }
});

categorySubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  let tmp = handleCategory();
  displayCategories(tmp);

  [...categoryList].forEach((category) => {
    category.addEventListener("click", function () {
      currentCategory = category;
      todoHeaderText.textContent = currentCategory.textContent;

      checkTodo(cardArray, currentCategory);
    });
  });
});

todoSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  let todoObject = handleTodo();
  let card = displayTodos(todoObject);
  //This is for sorting the todos into their respective categories
  card.classList.add(currentCategory.textContent);
  cardArray.push(card);
  todoArray.push(todoObject);
  checkTodo(cardArray, currentCategory);
});

cancelTodo.addEventListener("click", function () {
  todoForm.style.visibility = "hidden";
});

newTodoButton.addEventListener("click", function () {
  if (todoForm.style.visibility == "visible") {
    todoForm.style.visibility = "hidden";
  } else {
    todoForm.style.visibility = "visible";
  }
});

cancelCategory.addEventListener("click", function (event) {
  event.preventDefault();
  categoryForm.style.visibility = "hidden";
});

newCategoryButton.addEventListener("click", function () {
  if (categoryForm.style.visibility == "visible") {
    categoryForm.style.visibility = "hidden";
  } else {
    categoryForm.style.visibility = "visible";
  }
});
