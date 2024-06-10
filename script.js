'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloaseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);
for (let i = 0; i < btnOpenModel.length; i++) {
  console.log(btnOpenModel[i].textContent);
}
