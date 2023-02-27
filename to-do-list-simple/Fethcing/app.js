const fetchButton = document.getElementById('fetch-button');
const dataContainer = document.getElementById('data-container');

fetchButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      dataContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
    })
    .catch(error => console.error(error));
});