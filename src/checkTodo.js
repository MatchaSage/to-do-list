let cardContainer = document.querySelector(".card.container");

export default function checkTodo(cardArray, currentCategory) {
  let splitCategory = currentCategory.className.split(" ")[1];

  while (cardContainer.childNodes.length != 0) {
    cardContainer.removeChild(cardContainer.lastChild);
  }

  cardArray.forEach((todo) => {
    let splitTodo = todo.className.split(" ")[1];

    if (splitCategory == splitTodo) {
      cardContainer.append(todo);
    }
  });
}
