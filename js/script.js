/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
var selectBtn = document.querySelector('.select-btn');
var selectListItem = document.querySelectorAll('.select-list-item');
var selectName = document.querySelector('.select-name');

// работа с кастомным селектом
selectBtn.addEventListener('click', function () {
  selectBtn.closest('.main__form-select-box').classList.toggle('main__form-select-box--js-open');
});
selectListItem.forEach(function (el) {
  el.addEventListener('click', function () {
    selectName.textContent = el.textContent;
    el.closest('.main__form-select-box').classList.remove('main__form-select-box--js-open');
  });
});

// input[type='range']

var rangeNode = document.querySelector('.range');
var percentNode = document.querySelector('.percent');
rangeNode.addEventListener('input', function () {
  percentNode.innerHTML = this.value + ' ' + '%';
});
var burger = document.querySelector('.burger');
var burgerClose = document.querySelector('.btn-close');
var hiddenBox = document.querySelector('.hidden-box');
var hiddenBlock = document.querySelector('.hidden-box__inner');
var menuListItem = document.querySelectorAll('.menu-list-item');
var $body = document.body;
//burger - menu открытие и закрытие
burger.addEventListener('click', function () {
  hiddenBox.classList.add('hidden-box--js-open-box');
  $body.style.overflow = 'hidden';
});
burgerClose.addEventListener('click', function () {
  hiddenBox.classList.remove('hidden-box--js-open-box');
  $body.style.overflow = 'visible';
});
hiddenBox.addEventListener('click', function (e) {
  if (e.target === hiddenBox) {
    hiddenBox.classList.remove('hidden-box--js-open-box');
    $body.style.overflow = 'visible';
  }
});
menuListItem.forEach(function (el) {
  el.addEventListener('click', function () {
    hiddenBox.classList.remove('hidden-box--js-open-box');
    $body.style.overflow = 'visible';
  });
});
/******/ })()
;