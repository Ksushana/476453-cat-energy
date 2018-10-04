var sliderControlFat = document.querySelector(".slider-control--fat");
var sliderControlSlim = document.querySelector(".slider-control--slim");
var slideFat = document.querySelector(".slider-slide--fat");
var slideSlim = document.querySelector(".slider-slide--slim");
var sliderMark = document.querySelector(".slider-mark");

var changeOnFat = function () {
  slideSlim.classList.add("visually-hidden");
  slideFat.classList.remove("visually-hidden");
  sliderMark.classList.add("slider-mark--fat");
  sliderMark.classList.remove("slider-mark--slim");
}

var changeOnSlim = function () {
  slideSlim.classList.remove("visually-hidden");
  slideFat.classList.add("visually-hidden");
  sliderMark.classList.add("slider-mark--slim");
  sliderMark.classList.remove("slider-mark--fat");
}


var onFatClick = function () {
  changeOnFat();
}

var onSlimClick = function () {
  changeOnSlim();
}

console.log('sliderControlFat', document.querySelector(".slider-control--fat"));
sliderControlFat.addEventListener("click", onFatClick);
sliderControlSlim.addEventListener("click", onSlimClick);
