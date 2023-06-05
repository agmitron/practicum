console.log("Скрипт стартовал: ", new Date());

const place = document.querySelector(".location__coordinates");
const accuracy = document.querySelector(".location__accuracy");
const button = document.querySelector(".location__button");

function onSuccess(pos) {
  place.textContent = `Долгота: ${pos.coords.longitude}, Широта: ${pos.coords.latitude}`;
  accuracy.textContent = pos.coords.accuracy;

  console.log("onSuccess: ", new Date());

  button.addEventListener("click", function () {
    window.open(
      `https://www.openstreetmap.org/#map=4/${pos.coords.latitude}/${pos.coords.longitude}`
    );
  });
}

function onError(error) {
  console.error("onError", error);
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

// function getCurrentPosition(successCallback, errorCallback) {
//   const position = Math.random() * 10;

//   if (position > 5) {
//     errorCallback("Я ошибка");
//   } else {
//     successCallback(position);
//   }
// }

// getCurrentPosition(onSuccess, onError)
