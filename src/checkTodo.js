let cardContainer = document.querySelector('.card.container');

export default function checkTodo(todoArray, currentCategory) {
    let splitCategory = currentCategory.className.split(' ')[1];
    
    todoArray.forEach(todo => {
        let splitTodo = todo.className.split(' ')[1];
        console.log(splitTodo, splitCategory);
        if (splitCategory == splitTodo){
            cardContainer.append(todo);
        }
    })
    // console.log(todoArray);
    // console.log(currentCategory.className);
}