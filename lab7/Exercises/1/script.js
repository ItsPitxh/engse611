const myText = document.querySelector('#myText');
const changeTextButton = document.querySelector('#changeTextButton');
changeTextButton.addEventListener('click', () => {
    myText.textContent = "New Text Content";
});


