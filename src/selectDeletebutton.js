export default function selectDeleteButton(todoArray) {
    let deleteTodoButton = document.querySelectorAll('.delete.todo');

    deleteTodoButton.forEach(delButton => {
        delButton.addEventListener('click', function() {
            console.log(todoArray)
        })
    })
}