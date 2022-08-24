import createTodo from "./createTodo";
import './style.css';
let content = document.querySelector('#content');
let create = document.querySelector('.allprojects');
let todos = document.createElement('div');
todos.className = 'tododiv';
content.append(todos);

create.addEventListener('click', function() {
    let tmp = createTodo('haha', 'lol', '8-8-8', 'high');
    console.log(tmp);
})