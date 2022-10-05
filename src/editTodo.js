export default function editTodo(todoArray, cardArray, eventTarget) { 
    //Gets index of the todo in card array to reference it with the todoArray
    let targetIndex = cardArray.indexOf(eventTarget.parentNode)
    let card = todoArray[targetIndex]
    console.log(card)

}