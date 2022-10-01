import './style.css';
import displayCategories from "./displayCategories";
import handleTodo from "./handleTodo";
import handleCategory from "./handleCategory";
import displayTodos from "./displayTodo";
import checkTodo from "./checkTodo";
import selectDeleteButton from './selectDeletebutton';

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
let todoHeaderText = document.querySelector('.todo.text');
let cardContainer = document.querySelector('.card.container');
let categoryList = document.querySelector('.category.list').children;

let todoArray = [];


categorySubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let tmp = handleCategory();
    displayCategories(tmp);

    
    [...categoryList].forEach(category => {
        category.addEventListener('click', function() {
            currentCategory = category;
            todoHeaderText.textContent = currentCategory.textContent;
            
            while (cardContainer.childNodes.length != 0) {
                cardContainer.removeChild(cardContainer.lastChild);
            }
            checkTodo(todoArray, currentCategory);
        })
    })
    selectDeleteButton(todoArray);
})

todoSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    let tmp = handleTodo();
    let card = displayTodos(tmp);
    //This is for sorting the todos into their respective categories
    card.classList.add(currentCategory.textContent);
    todoArray.push(card);
    checkTodo(todoArray, currentCategory);
    selectDeleteButton(todoArray);
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