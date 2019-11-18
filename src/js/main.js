"use strict";
/*global document: false */

String.prototype.sarcastic = function () {
  return [...this]
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
    .join('');
};

function init() {
  let btn = document.querySelector('button'),
      input = document.querySelector('input'),
      result = document.querySelector('p');

  btn.addEventListener('click', () => {
    result.innerText = input.value.sarcastic();
  });
}

function ready() {
  if (document.readyState === 'complete') {
    init();
  } else {
      document.addEventListener('DOMContentLoaded', init);
  }

}

ready();

