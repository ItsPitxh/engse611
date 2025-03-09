const exampleButton = document.querySelector('#exampleButton');
const message = document.querySelector('#message');

exampleButton.addEventListener('click', clickHandle)

function clickHandle () {
    message.textContent = "Clicked!!"
}