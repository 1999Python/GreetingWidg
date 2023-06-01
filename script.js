//Selecting all the elements and buttons
const valueLanguages = document.querySelector(".itemTypeRadio");

const enterButton = document.querySelector(".enter");

const Name = document.querySelector(".Name");

const valueDisplay = document.querySelector(".valueDisplay");

const resetBtn = document.querySelector(".resetBtn");

const error = document.querySelector(".error");

const theMessage = document.querySelector(".theMessage");

let counter = 0;

let NameTotal = 0;

let NameBasket = "";

let nameCheck = [];



function incrementCounter() {
  if(Name.value !== ""){
    counter++;
    valueDisplay.innerHTML = counter;
  }
  else if(Name.value !== nameCheck){
    counter++;
  }
}
enterButton.addEventListener("click", incrementCounter);

resetBtn.addEventListener("click", () => {
  counter = 0;
  theMessage.remove();
  valueDisplay.innerHTML = counter;

});

enterButton.addEventListener("click", function(){ 

  const checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  
  if (!checkedRadioBtn && !Name.value){
    error.innerHTML = "Please enter your name and a language.";
    }
 else if (!Name.value) {
      error.innerHTML = "Please enter your name.";
  }
  
 else if (!checkedRadioBtn){
    error.innerHTML = "Please select a language.";
  
  }
  
  });

  function greetUser() {
  
    const checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
  if (checkedRadioBtn){
      var greeting = checkedRadioBtn.value
  }
    
      switch (greeting) {
        case 'english':
          greeting = 'Hello, ' + Name.value + '!';
          break;
        case 'afrikaans':
          greeting = 'Haai, ' + Name.value + '!';
          break;
        case 'arabic':
          greeting = 'مرحباً، ' + Name.value + '!';
          break;
      }
    
      // Display the greeting message
      var messageDiv = document.querySelector('.theMessage');
      messageDiv.textContent = greeting;
  }
  enterButton.addEventListener("click", greetUser);