'strict';
const oneHundred = document.querySelector('.oneH'); //Select 100 pt class
const twoHundred = document.querySelector('.twoH'); //Select 200 pt class
const threeHundred = document.querySelector(".threeH"); //300 pt class
const fourHundred = document.querySelector(".fourH"); //400 pt class
const fiveHundred = document.querySelector(".fiveH"); //500 pt class

let buttonElements = ''; //To hold the buttons
let buttonArray = [];
let str = '';

let i;
for (i = 0; i < 26; i++) {
  str = i.toString(); //Convert i to string value
  buttonElements = document.getElementById(str); //gets elements by their id (converted to string)
  buttonArray.push(buttonElements); //Puts buttons into array

}
console.log(buttonArray);

//Variable holds modal class
const modal = document.querySelector('.modal')
//Variable for the overlay class
const overlay = document.querySelector('.overlay');
//Variable for close modal button
const btnCloseModal = document.querySelector('.close-modal');
//Variable for the open modal button
const btnOpenModal = document.querySelector('.show-modal');

//Variable to hold jeopardy questions
const question = document.querySelector('.question');




//Select player 1's score element
const scorePlayer1 = document.querySelector('.score--0');

//Get player 2's score element
const scorePlayer2 = document.querySelector('.score--1');


const answerElement = document.querySelector('.answer');
//Function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

}

//Add click event listener
let questions;
for (let i = 1; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', function () {
    questions = getQuestions(parseInt(buttonArray[i].id));
    function getQuestions(id) {


      switch (id) {
        case 1:
          id = 1

          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');

          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)

          // Check if the "answer" element exists
          const inputElement = document.querySelector('#answer');
          const answerElement = document.querySelector('#my-answer');

          inputElement.addEventListener('input', () => {
            const inputValue = inputElement.value;
            answerElement.textContent = inputValue;
            console.log(inputValue)
          });







          break;
        case 2:
          id = 2
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;

          btnCloseModal.addEventListener('click', closeModal)




          break;
        case 3:
          id = 3
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 4:
          id = 4
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 5:
          id = 5
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 6:
          id = 6
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 7:
          id = 7
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 8:
          id = 8
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 9:
          id = 9
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 10:
          id = 10
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 11:
          id = 11
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 12:
          id = 12
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 13:
          id = 13
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 14:
          id = 14
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 15:
          id = 15
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 16:
          id = 16
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 17:
          id = 17
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 18:
          id = 18
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 19:
          id = 19
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 20:
          id = 20
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 21:
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;

          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 22:
          id = 22
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 23:
          id = 23
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 24:
          id = 24
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;
        case 25:
          id = 25
          modal.classList.remove('hidden');
          overlay.classList.remove('hidden');
          question.textContent = QA[id].question;
          btnCloseModal.addEventListener('click', closeModal)
          break;

      }


      console.log(questions)
    }

  });

}


/*function getQuestions(q){
   
  switch (q){
    case 1:
      console.log('This button works');
      break;

    case 2:
      console.log('This button works');
      break;
  }
//Maybe put this in a loop
 

 //console.log(q);//This kind of works
}
*/









