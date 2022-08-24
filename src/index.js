import createTodo from "./createTodo";
import './style.css';
import displayTodos from "./displayTodo";

let content = document.querySelector('#content');
let TEMPcreate = document.querySelector('.allprojects');
let todos = document.createElement('div');
todos.className = 'tododiv';
content.append(todos);

TEMPcreate.addEventListener('click', function() {
    let tmp = createTodo('haha', 'lol', '8-8-8', 'high');
    let cardDiv = displayTodos(tmp);
    
    todos.append(cardDiv);
})