const myP = document.querySelector('#example');
const changeStyleButton = document.querySelector('#changeStyleButton');
changeStyleButton.addEventListener('click', clickHandle);

function clickHandle() {
    myP.style.backgroundColor = 'lightblue';
    myP.style.fontSize = '20px';
}

