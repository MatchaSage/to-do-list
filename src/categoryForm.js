export default function categoryForm() {
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
    
    return catForm;
}