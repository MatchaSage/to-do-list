export default function createCategory(name='default'){
    let categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category', 'container', name);
    categoryDiv.textContent = name;

    return categoryDiv;
}