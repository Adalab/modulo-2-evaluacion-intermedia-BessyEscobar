'use strict';

//queryselectors
const testButton = document.querySelector('.js__testButton');
const form = document.querySelector('.js__form');
const userNumberInput = document.querySelector('.js__userNumberInput');
const clueBox = document.querySelector('.js__clueBox')
const triesBox = document.querySelector('.js__triesBox')


//variables globales

const randomNumber = getRandomNumber(100); //genera el número aleatrorio
let triesCounter = 0; //contador de iintentos 

//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
};

function getuserNumber() {
   return parseInt(userNumberInput.value);
}

function writeClue(message) {
  clueBox.innerHTML = message;
}

function checkNumber(userNumber , randomNumber) {

  if( isNaN(userNumber) ) {
    writeClue('El número debe estar entre 1 y 100'); 
  }
  else if( userNumber < 1 || userNumber > 100) {
    writeClue('El número debe estar entre 1 y 100'); 
  }
  else if( userNumber === randomNumber ) {
    writeClue('Has acertado campeona');
  }
  else if( userNumber > randomNumber) {
    writeClue('Demasiado alto'); 
  }
  else if( userNumber < randomNumber) {
    writeClue('Demasiado bajo'); 
  }
}

function updateTries() {
  triesCounter++;

  triesBox.innerHTML = `Números de intentos ${triesCounter}`
}

function hadleClickTestButton(event) {

 const userNumber = getuserNumber();

  checkNumber(userNumber , randomNumber);

  updateTries(); 

  // console.log('funciona')
}


//eventos

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
// });

testButton.addEventListener ( 'click' , hadleClickTestButton );


console.log( `Mi número aleatorio es ${randomNumber}` );