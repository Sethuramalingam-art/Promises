// create a promise

// const promise = new Promise((resolve, reject) => {});

// then catch finally

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

var x = promise1
  .then((val) => {
    return "ABC" + val;
  })
  .then((val) => {
    console.log("val");
  });
console.log(x);
