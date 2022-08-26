export default function createCategory(name='default'){
    let categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category', name);
    categoryDiv.textContent = name;

    return categoryDiv;
}