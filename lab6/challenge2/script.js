document.querySelectorAll("#main p").forEach(p => {
    if (p.textContent.includes("Llamas and Chickens!")) {
        p.style.color = "red";
    }
});