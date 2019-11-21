"use strict";
/*global document: false */

String.prototype.sarcastic = function () {
  return [...this]
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
    .join('');
};

function copyToClipboard(value) {
  let tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function init() {
  let btn = document.querySelector('button'),
      input = document.querySelector('input'),
      result = document.querySelector('p');

  input.addEventListener('input', () => {
    result.innerText = input.value.sarcastic();
  });

  btn.addEventListener('click', () => {
    copyToClipboard(result.innerText);
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

