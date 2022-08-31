const carousel = document.querySelector(".carousel");
const btn_right = document.querySelector(".btn-right");
const btn_left = document.querySelector(".btn-left");
const indicators = document.querySelectorAll(".indicator");

let position = 0;
let position_max = 1600;
let position_min = 0;

btn_right.addEventListener("click", function (e) {
  e.preventDefault();

  if (position === position_max) {
    position = 0;
  } else {
    position += 800;
  }

  carousel.scrollLeft = position;

  isActive();
});

btn_left.addEventListener("click", function (e) {
  e.preventDefault();

  if (position === position_min) {
    position = 1600;
  } else {
    position -= 800;
  }

  carousel.scrollLeft = position;

  isActive();
});

function isActive() {
  if (position === 0) {
    indicators[0].classList.add("active");
    indicators[1].classList.remove("active");
    indicators[2].classList.remove("active");
  } else if (position === 800) {
    indicators[0].classList.remove("active");
    indicators[1].classList.add("active");
    indicators[2].classList.remove("active");
  } else {
    indicators[0].classList.remove("active");
    indicators[1].classList.remove("active");
    indicators[2].classList.add("active");
  }
}
