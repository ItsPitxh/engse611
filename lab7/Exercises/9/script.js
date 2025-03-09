const dataContainer = document.querySelector("#dataContainer");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach(post => {
            const postElement = document.createElement("p");
            postElement.textContent = post.title;

            dataContainer.appendChild(postElement)
        });
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });