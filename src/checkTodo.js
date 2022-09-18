let cardContainer = document.querySelector('.card.container');

export default function checkTodo(todoArray, currentCategory) {
    todoArray.forEach(todo => {
        if (todo.className == currentCategory.textContent); {
            cardContainer.append(todo);
        }
    })
    console.log(currentCategory);
}