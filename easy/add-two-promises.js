const addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => values[0] + values[1]);
};

console.log(
  addTwoPromises(
    (promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
    (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)))
  )
);
