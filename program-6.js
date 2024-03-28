// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

function fetchDataWithRetry(url, maxRetries, delayTime) {
  let retries = 0;

  function fetchData() {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data from ${url}. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .catch((error) => {
        retries++;
        console.log(
          `Retry ${retries} after ${delayTime}ms due to:`,
          error.message
        );
        if (retries < maxRetries) {
          return new Promise((resolve) => setTimeout(resolve, delayTime)).then(
            fetchData
          );
        } else {
          throw error;
        }
      });
  }

  return fetchData();
}

//Correct
// const url = "https://jsonplaceholder.typicode.com/posts";

// Error
const url = "https://jsonplaceholder.typicode.com/postss";

const maxRetries = 3;
const delayTime = 5000;

fetchDataWithRetry(url, maxRetries, delayTime)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
