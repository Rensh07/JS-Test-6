// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

const operation1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous operation 1");
      resolve();
    }, 1000);
  });
};

const operation2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous operation 2");
      resolve();
    }, 2000);
  });
};

const operation3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Asynchronous operation 3");
      resolve();
    }, 3000);
  });
};

const performOperations = async () => {
  try {
    await operation1();
    await operation2();
    await operation3();
    console.log("All operations completed");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

performOperations();
