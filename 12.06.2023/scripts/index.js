const aboutProjectButton = document.querySelector(
  ".header__about-project-button"
);
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const showPictureButton = document.querySelector(".popup__show-picture-button");
const hidePictureButton = document.querySelector(".popup__hide-picture-button");
const picture = document.querySelector(".popup__picture");

const listItems = document.querySelectorAll("li");

aboutProjectButton.addEventListener("click", function () {
  popup.classList.toggle("popup_closed");
});

closeButton.addEventListener("click", function () {
  popup.classList.add("popup_closed");
});

showPictureButton.addEventListener("click", function () {
  showPictureButton.hidden = true;

  picture.classList.remove("popup__picture_hidden");
});

hidePictureButton.addEventListener("click", function () {
  showPictureButton.hidden = false;

  picture.classList.add("popup__picture_hidden");
});

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target)
  } else {
    console.log('NOT LI')
  }
})
