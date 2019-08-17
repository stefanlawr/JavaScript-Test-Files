const fetch = require('node-fetch');

function fetchAvatarUrl(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(response => response.json())
    .then(data => data.title);
}

const result = fetchAvatarUrl(123);
