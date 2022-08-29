export default function handleTodo() {
    let todoTitle = document.getElementById('todoTitle').value;
    let todoDescription = document.getElementById('todoDescription').value;
    let todoDuedate = document.getElementById('todoDuedate').value;
    let todoPriority = document.getElementById('todoPriority').value;
    let todoFinished = document.getElementById('todoFinished').checked;

    return {
        todoTitle, 
        todoDescription, 
        todoDuedate, 
        todoPriority, 
        todoFinished,
    }
}