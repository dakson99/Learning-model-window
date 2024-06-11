'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloaseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel);

const openModel = function () {
  //console.log('Button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open model
for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModel);
}

//Close model
btnCloaseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

//Implemented 'escape' button
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') if (!model.classList.contains('hidden')) closeModel();
});
