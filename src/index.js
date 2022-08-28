import './style.css';
import displayCategories from "./displayCategories";
import createCategory from "./createCategory";

let newCategoryButton = document.querySelector('.new.category.button');
let newTodoButton = document.querySelector('.new.todo');
let defaultCategory = createCategory();
displayCategories(defaultCategory);

let cancelCategory = document.querySelector('.cancel.category');
let categoryForm = document.getElementById('newCategory');

newTodoButton.addEventListener('click', function() {
    
})

cancelCategory.addEventListener('click', function(event) {
    event.preventDefault();
    categoryForm.style.visibility = 'hidden';
})

newCategoryButton.addEventListener('click', function() {
    if (categoryForm.style.visibility == 'hidden') {
        categoryForm.style.visibility = 'visible';
    }
    else {
        categoryForm.style.visibility = 'hidden';
    }

    let createdCategory = createCategory(newCategory);
    displayCategories(createdCategory);
})