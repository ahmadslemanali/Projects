let count = 0;
const countSpan = document.getElementById('count');
const fetchButton = document.getElementById('fetch-button');
const dataContainer = document.getElementById('data-container');

function fetchWithCount(url) {
  count++;
  countSpan.innerText = count;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      dataContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
      return { count, data };
    });
}

fetchButton.addEventListener('click', () => {
  fetchWithCount('https://jsonplaceholder.typicode.com/posts/1')
    .then(result => {
      console.log(`Request count: ${result.count}`);
      console.log(`Response data: ${JSON.stringify(result.data)}`);
    })
    .catch(error => console.error(error));
});