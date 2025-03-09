const removeElementButton = document.querySelector('#removeElementButton');
const parent = document.querySelector('#parent');
const example = document.querySelector('#example');
removeElementButton.addEventListener("click", clickHandle);
function clickHandle () {
    example.remove();
}