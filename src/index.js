import './style.css';
import displayCategories from "./displayCategories";
import handleTodo from "./handleTodo";
import handleCategory from "./handleCategory";
import displayTodos from "./displayTodo";

let newCategoryButton = document.querySelector('.new.category.button');
let newTodoButton = document.querySelector('.new.todo');

let cancelCategory = document.querySelector('.cancel.category');
let categoryForm = document.getElementById('newCategory');
let todoForm = document.getElementById('newTodo');
let cancelTodo = document.querySelector('.cancel.todo');
let todoSubmit = document.getElementById('newTodo');
let categorySubmit = document.getElementById('newCategory');
//Sets current category for use later for selecting where to store created todos
let currentCategory = document.querySelector('.category.Default');
let todoContainer = document.querySelector('.todo.container');

categorySubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let tmp = handleCategory();
    displayCategories(tmp);
})

todoSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let tmp = handleTodo();
    let card = displayTodos(tmp);
    todoContainer.append(card);
})

cancelTodo.addEventListener('click', function() {
    todoForm.style.visibility = 'hidden';
})

newTodoButton.addEventListener('click', function() {
    if (todoForm.style.visibility == 'visible') {
        todoForm.style.visibility = 'hidden';
    }

    else {
        todoForm.style.visibility = 'visible';
    }
})

cancelCategory.addEventListener('click', function(event) {
    event.preventDefault();
    categoryForm.style.visibility = 'hidden';
})

newCategoryButton.addEventListener('click', function() {
    if (categoryForm.style.visibility == 'visible') {
        categoryForm.style.visibility = 'hidden';
    }

    else {
        categoryForm.style.visibility = 'visible';
    }
})