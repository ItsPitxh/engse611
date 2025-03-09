const element = document.querySelector("#animateMe");
const button = document.querySelector("#animateButton");

function clickHandle () {
    element.style.width = "200px";
    element.style.height = "200px";
    element.style.backgroundColor = "red";
}

button.addEventListener('click', clickHandle);

const position = 0;
function animate () {
    if(position<350) {
        position++;
        element.style.left = position + "px";
    } else {
        clearInterval(interval);
    }
}

const interval = setInterval(animate, 10);