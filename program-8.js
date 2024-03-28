// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchDataWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(
        new Error(`Request to ${url} timed out after ${timeout} milliseconds`)
      );
    }, timeout);

    fetch(url)
      .then((response) => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data from ${url}. Status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const timeout = 3000;
// const timeout = 50;
console.log("Timeout milliseconds: " + timeout);

fetchDataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
