'use strict';

//queryselectors
const numberInput = document.querySelector('.js_numberInput');
const btnNumber = document.querySelector('.js_numberBtn');
const anwerKey = document.querySelector('.js_key');
const attemptCount = document.querySelector('.js_numbertry');

//Eventos y funciones
const handleClick = (event) => {
    event.preventDefault();
    
    console.log(numberInput.value);
};

btnNumber.addEventListener ('click' , handleClick);

// 
// function confimNumber() {

// const userGuess = document.getElementById('userGuess').value;

// if (userGuess !== '' & !isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {

//     const guess = parseInt(userGuess);

//     if (guess === getRandomNumber)
//     console.log('funciona')
// }

// }; 

for ( let i=0; i < numberInput.value; i++) {
    console.log('funcina')
};



//
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  };
console.log('numero random')
