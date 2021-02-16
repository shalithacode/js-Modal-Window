'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const show = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0; i< btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', show);
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

