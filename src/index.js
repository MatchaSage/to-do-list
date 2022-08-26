import createTodo from "./createTodo";
import './style.css';
import displayTodos from "./displayTodo";
import createCategory from "./createCategory";
import categoryForm from "./categoryForm";
import todoHeader from "./todoHeader";

//Main body of page
let content = document.querySelector('#content');
let viewProjectsButton = document.querySelector('.allprojects');

//Container div that holds categories and todos
let todos = document.createElement('div');
todos.className = 'tododiv';
content.append(todos);
let todoHead = todoHeader();
todos.append(todoHead);

//Starting category when site is opened
let defaultCategory = createCategory();
todos.append(defaultCategory);

let categoryArray = [];
let categoryButton = document.querySelector('.category.button');

categoryButton.addEventListener('click', function() {
    let catForm = categoryForm();
    
    if (todos.children.length > 1) {
        todos.removeChild(todos.lastChild);
    }

    todos.append(catForm);
})