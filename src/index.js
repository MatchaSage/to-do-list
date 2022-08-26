import createTodo from "./createTodo";
import './style.css';
import displayTodos from "./displayTodo";
import createCategory from "./createCategory";
import categoryForm from "./categoryForm";

//Main body of page
let content = document.querySelector('#content');
let viewProjectsButton = document.querySelector('.allprojects');
let createCategoryButton = document.querySelector('.create.category');

//Container div that holds categories and todos
let todos = document.createElement('div');
todos.className = 'tododiv';
content.append(todos);

let defaultCategory = createCategory();
let categoryArray = [];

todos.append(defaultCategory);

createCategoryButton.addEventListener('click', function(){
    let tmp = categoryForm();
    while (todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }
    todos.appendChild(tmp);
})