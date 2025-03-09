const parent = document.querySelector('#parent');
const addElementButton = document.querySelector('#addElementButton');
addElementButton.addEventListener('click', clickHandle);

function clickHandle() {
    const newElement = document.createElement("p");
    newElement.textContent = "Hello World";
    parent.append(newElement);
}