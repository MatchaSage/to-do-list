export default function deleteTodo(cardArray, todoArray, cardIndex) {
    cardArray.splice(cardIndex, 1);
    todoArray.splice(cardIndex, 1);
}