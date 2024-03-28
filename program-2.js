// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went wrong"));
      }
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
