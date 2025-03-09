const inputElement = document.querySelector('#exampleInput');
const form = document.querySelector('#exampleForm');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = inputElement.value;

    const output = document.querySelector("#output");
    output.textContent = "Form sumitted with input value:" + " " + inputValue;
});