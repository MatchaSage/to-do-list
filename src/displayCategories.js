let categoryList = document.querySelector('.category.list');

export default function displayCategories(category) {
    let categoryArray = [];
    categoryArray.push(category);

    categoryArray.forEach(category => {
        categoryList.append(category);
    })
}