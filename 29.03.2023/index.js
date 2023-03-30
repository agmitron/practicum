const result = document.querySelector(".result");
const button = document.querySelector(".button");

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  // console.log("Ваше текущее местоположение:");
  // console.log(`Широта: ${crd.latitude}`);
  // console.log(`Долгота: ${crd.longitude}`);
  // console.log(`Плюс-минус ${crd.accuracy} метров.`);

  const html = `
    <p>Ваше текущее местоположение: </p>
    <p>Широта: ${crd.latitude}</p>
    <p>Долгота: ${crd.longitude}</p>
    <p>Плюс-минус ${crd.accuracy} метров.</p>
  `;

  result.innerHTML = html
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

button.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(success, error, options);
});
