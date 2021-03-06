'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 183.selecting , creating and delete elements
//Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');
console.log(allSelections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

document.getElementsByClassName('btn');

//creating

// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality';
message.innerHTML =
  'We use cookies for improved functionality. <button class ="btn btn--close-cookie">Got it!</button>';
header.prepend(message);

header.append(message);

header.before(message);

header.after(message);

//Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// 184. Styles , Attributes and Classes
//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

// 186.Types of events and event handlers

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// });

// h1.onmouseenter = function (e) {
// alert('addEventListener: Great! You are reading the heading');
// };

//Dom traversing

const h1 = document.querySelector('h1');

//Going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);

// Going upwards: parents

console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// Implementing a Sticky Navigation: The scroll Event
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
