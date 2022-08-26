import './style.css';
import displayCategories from "./displayCategories";
import createCategory from "./createCategory";

let newCategoryButton = document.querySelector('.new.category.button');

let defaultCategory = createCategory();
displayCategories(defaultCategory);

newCategoryButton.addEventListener('click', function() {
    let newCategory = prompt('New Category', '')
    let createdCategory = createCategory(newCategory);
    displayCategories(createdCategory);
})