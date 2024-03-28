// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeatAtInterval(func, interval) {
  const intervalId = setInterval(func, interval);

  return function stopInterval() {
    clearInterval(intervalId);
  };
}

function sayHello() {
  console.log("Hello!");
}

const stop = repeatAtInterval(sayHello, 1000);

setTimeout(() => {
  stop();
  console.log("Interval stopped.");
}, 5000);
