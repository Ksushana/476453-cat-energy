var sliderControlFat = document.querySelector(".slider-control--fat");
var sliderControlSlim = document.querySelector(".slider-control--slim");
var slideFat = document.querySelector(".slider-slide--fat");
var slideSlim = document.querySelector(".slider-slide--slim");
var sliderValue = document.querySelector(".slider-range-value");

var changeOnFat = function () {
  slideSlim.classList.add("visually-hidden");
  slideFat.classList.remove("visually-hidden");
  sliderValue.classList.add("slider-range-value--fat");
  sliderValue.classList.remove("slider-range-value--slim");
}

var changeOnSlim = function () {
  slideSlim.classList.remove("visually-hidden");
  slideFat.classList.add("visually-hidden");
  sliderValue.classList.add("slider-range-value--slim");
  sliderValue.classList.remove("slider-range-value--fat");
}


var onFatClick = function () {
  changeOnFat();
}

var onSlimClick = function () {
  changeOnSlim();
}

sliderControlFat.addEventListener("click", onFatClick);
sliderControlSlim.addEventListener("click", onSlimClick);
