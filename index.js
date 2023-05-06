// create a promise

// const promise = new Promise((resolve, reject) => {});

// then catch finally - ES5 methods

// ASync await - ES6 methods

// finaly will call only after then and catch

//create a promise which resolve after 5 secs

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 1000);
});

console.log(promise1);

promise1.then((val) => {
  console.log(val);
});

promise1
  .then((val) => {
    console.log("val1");
    //return "ABC" + val;
  })
  .then((val) => {
    console.log("val2");
    return "ABC" + val;
  });

//result:
//   Promise { <pending> }
// Promise { <pending> }
// hello world
// val1
// val2

//Promie methods

// Promise.all();
// Promise.allSettled();
// Promise.race();
// Promise.any();

//Using async,await promises in ES6 here we can use try catch methods

// a function that declared with async it should return a promise

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("This is for ES6");
  }, 5000)
);

async function example(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally block");
  }
}

example(promise2);
