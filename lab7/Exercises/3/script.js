const myP = document.querySelector('#myP');
const toggleClassButton = document.querySelector('#toggleClassButton');
toggleClassButton.addEventListener("click", clickHandle);
function clickHandle() {
    myP.classList.toggle("new-class");
    myP.classList.toggle("old-class");
}