export default function deleteTodo(cardArray, todoArray) {
    let deleteTodoButton = document.querySelectorAll('.delete.todo');
    
    deleteTodoButton.forEach(delButton => {
        delButton.addEventListener('click', function() {
            let cardIndex = cardArray.indexOf(this.parentNode)

            cardArray.splice(cardIndex, 1);
            todoArray.splice(cardIndex, 1);
            console.log(cardArray)
        })
    })
}