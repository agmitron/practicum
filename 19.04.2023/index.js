const result = document.querySelector(".result");
const myButton = document.querySelector(".my-button");

new Promise((resolve, reject) => {
  resolve();
  reject();
});

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      const error = new Error("Timeout can't be less than 0.");
      reject(error);
    }

    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// sleep(1000)
//   .then((res) => console.log("Что-то полезное 1"))
//   .then(() => sleep(-1))
//   .catch((error) => console.error(error))
//   .then(() => console.log("Что-то полезное 2"))
//   .then(() => sleep(-3000))
//   .catch((error) => console.error(error))
//   .then(() => console.log("Что-то полезное 3"))
//   .then(() => sleep(2000))
//   .catch((error) => console.error(error))
//   .catch((error) => console.error(error));

// console.log('Что-то ещё')
// console.log('И ещё')
// console.log('Ещё')
// console.log('Да ещё')
// console.log('И ещё')

const clickPromise = new Promise((resolve, reject) => {
  myButton.addEventListener("click", (e) => {
    resolve(e);
  });
});

clickPromise;

// const promises = [
//   sleep(1000),
//   sleep(500).then(() => console.log("500")),
//   sleep(700).then(() => console.log("700")),
//   sleep(3000),
//   sleep(1000),
//   new Promise((resolve) => resolve("Nikita")),
//   clickPromise,
// ];

// // Promise.all(promises).then(([res1, res2, res3, res4, res5, res6, res7]) => console.log({res7, res6}))
// Promise.race([
//   sleep(5000).then(() => Promise.reject("Slishkom dolgo((((")),
//   clickPromise,
// ])
//   .then(() => {
//     alert("OK");
//   })
//   .catch((error) => {
//     console.error(error);
//     alert("ERROR");
//   });

const nikitaPromise = new Promise((resolve) => resolve("Nikita"));

const resolveWithValue = (value) => new Promise((resolve) => resolve(value));

async function main() {
  await sleep(1000);
  console.log("Slept 1000");

  await sleep(2000);
  console.log("Slept 2000");

  const nikita = await nikitaPromise;
  console.log(nikita);

  const event = await clickPromise;
  console.log({ event });

  const value = await resolveWithValue(false);
  console.log(value);

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log({ json });
}

// main();

const interval = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      const error = new Error("Interval can't be less than 0.");
      reject(error);
    }

    setInterval(() => {
      resolve();
    }, ms);
  });
};

intervalPromise = new Promise((resolve) => {
  let counter = 10;

  let intervalId = setInterval(() => {
    counter = counter - 1;
    console.log({ counter });

    if (counter <= 0) {
      resolve();
      clearInterval(intervalId)
    }
  }, 1000);
});

intervalPromise.then(() => alert('ПОЕХАЛИ!'));
