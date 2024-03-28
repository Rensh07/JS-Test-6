// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

function fetchDataFromAPI(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function fetchMultipleAPIs(urls) {
  const promises = urls.map((url) => fetchDataFromAPI(url));
  return Promise.all(promises);
}

fetchMultipleAPIs(urls)
  .then((results) => {
    console.log("Combined Results:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
