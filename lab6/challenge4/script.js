function ClickHandler(e) {
    e.preventDefault();
    window.alert(this.textContent);
}

document.querySelectorAll("li > a").forEach(link => {
    link.addEventListener("click", ClickHandler);
});