//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

function downloadContentsInParallel(urls) {
  const promises = urls.map((url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}`);
        }
        return response.text();
      })
      .then((content) => {
        return { url, content };
      })
      .catch((error) => {
        return { url, error: error.message };
      });
  });

  return Promise.all(promises);
}

downloadContentsInParallel(urls)
  .then((results) => {
    results.forEach((result) => {
      if (result.error) {
        console.error(`Error downloading ${result.url}: ${result.error}`);
      } else {
        console.log(`Content downloaded from ${result.url}:`, result.content);
      }
    });
  })
  .catch((error) => {
    console.error("Error downloading contents:", error);
  });
