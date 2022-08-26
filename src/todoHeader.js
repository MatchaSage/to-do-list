export default function todoHeader() {
    let container = document.createElement('div');
    container.classList.add('todo', 'header');

    let todoButton = document.createElement('button');
    todoButton.classList.add('todo', 'button');
    todoButton.textContent = 'New Todo';

    let categoryButton = document.createElement('button');
    categoryButton.classList.add('category', 'button');
    categoryButton.textContent = 'New Category';

    
    //Create form
    let catForm = document.createElement('form');
    catForm.classList.add('category', 'form');
    catForm.setAttribute('method', 'get');
    catForm.setAttribute('id', 'set category');
    
    //Create category name text field
    let catName = document.createElement('input');
    catName.setAttribute('type', 'text');
    catName.setAttribute('name', 'title')
    catName.setAttribute('placeholder', 'Category title');
    
    //Submit button
    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('value', 'Add Category');
    
    catForm.append(catName, submitButton);
    
    container.append(todoButton, categoryButton, catForm);
    return container;
}