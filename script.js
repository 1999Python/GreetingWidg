//Selecting all the elements and buttons
const greetingsApp = MainGreetings();

const valueLanguages = document.querySelector(".itemTypeRadio");

const enterButton = document.querySelector(".enter");

const nameElement = document.querySelector(".Name");

const valueDisplay = document.querySelector(".valueDisplay");

const resetBtn = document.querySelector(".resetBtn");

const error = document.querySelector(".error");

const theMessage = document.querySelector(".theMessage");



enterButton.addEventListener("click", function () {

  greetingsApp.setName(nameElement.value)
  const languageType = document.querySelector('input[name="languageType"]:checked');
  greetingsApp.setLanguage(languageType.value)
  theMessage.innerHTML = greetingsApp.greetingTheUser();
  valueDisplay.innerHTML = greetingsApp.amountOfUsers();

})

resetBtn.addEventListener("click", function () {
  greetingsApp.resetCounter();
  theMessage.innerHTML = greetingsApp.greetingTheUser();
  valueDisplay.innerHTML = greetingsApp.amountOfUsers();
})
