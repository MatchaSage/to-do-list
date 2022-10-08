let categoryList = document.querySelector(".category.list");

export default function displayCategories(category) {
  let categoryArray = [];
  let categoryDiv = document.createElement("div");
  categoryDiv.textContent = category;
  categoryDiv.classList.add("category", category);
  categoryArray.push(categoryDiv);

  categoryArray.forEach((category) => {
    categoryList.append(category);
  });

  return categoryArray;
}
