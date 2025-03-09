const my_element = document.querySelector("p > a");
my_element?.addEventListener("click", ClickHandler);

function ClickHandler (e) {
    window.alert("clicked!");
    e.preventDefault();
}
