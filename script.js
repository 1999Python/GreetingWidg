//Selecting all the elements and buttons
const greetingsApp = MainGreetings();

const valueLanguages = document.querySelector(".itemTypeRadio");

const enterButton = document.querySelector(".enter");

const nameElement = document.querySelector(".Name");

const valueDisplay = document.querySelector(".valueDisplay");

const resetBtn = document.querySelector(".resetBtn");

const error = document.querySelector(".error");

const theMessage = document.querySelector(".theMessage");


//local storage

function updateStoredNames(name){
  const storedNames = JSON.parse(localStorage.getItem('greetedNames')) || [];
  storedNames.push(name)
  localStorage.setItem('greetedNames', JSON.stringify(storedNames));
}

enterButton.addEventListener("click", function () {

  const languageTypeCheck = document.querySelector('input[name="languageType"]:checked');

  if (languageTypeCheck) {
updateStoredNames(nameElement.value);
    greetingsApp.setLanguage(languageTypeCheck.value);

  }

// localStorage.getItem("greetedNames");


  greetingsApp.setName(nameElement.value);

  const errorMessage = greetingsApp.errorMessages();
  if (errorMessage) {
    error.textContent = errorMessage;
    theMessage.innerHTML = "";

    setTimeout(() => {
      error.textContent = "";
      theMessage.textContent = "";
    }, 2000); // Clear the greeting message
  } 
  else {
    error.textContent = "";
    greetingsApp.setName(nameElement.value);
    
    theMessage.innerHTML = greetingsApp.greetingTheUser();
    valueDisplay.innerHTML = greetingsApp.amountOfUsers();

    setTimeout(() => {
      theMessage.textContent = "";

    }, 3000); // Clear greeting message and user count after 3 seconds
  }
});

resetBtn.addEventListener("click", function () {
  greetingsApp.resetCounter();
  theMessage.innerHTML = greetingsApp.greetingTheUser();
  valueDisplay.innerHTML = greetingsApp.amountOfUsers();

  localStorage.removeItem("greetedNames");
});
