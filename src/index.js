import './style.css';
import displayCategories from "./displayCategories";
import createCategory from "./createCategory";
import handleTodo from "./handleTodo";

let newCategoryButton = document.querySelector('.new.category.button');
let newTodoButton = document.querySelector('.new.todo');
let defaultCategory = createCategory();
displayCategories(defaultCategory);

let cancelCategory = document.querySelector('.cancel.category');
let categoryForm = document.getElementById('newCategory');
let todoForm = document.getElementById('newTodo');
let cancelTodo = document.querySelector('.cancel.todo');
let todoSubmit = document.getElementById('newTodo');

todoSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let tmp = handleTodo();
    console.log(tmp)
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

    let createdCategory = createCategory(newCategory);
    displayCategories(createdCategory);
})