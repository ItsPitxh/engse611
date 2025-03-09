const element = document.querySelector("#example");
const parent = element.parentNode;
console.log("Parent:", parent);

const children = parent.children;
console.log("child elements:",children);

const nextSibling = element.nextElementSibling;
console.log("Next Sibling Element:", nextSibling);