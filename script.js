////////////////////////////////////////////////////////////////////////
//Selecting all the elements and buttons
const valueLanguages = document.querySelector(".valueLanguages");

const enterButton = document.querySelector(".enter");

const Name = document.querySelector(".Name");

const valueDisplay = document.querySelector(".valueDisplay");

const resetBtn = document.querySelector(".resetBtn");

const errorElement = document.querySelector(".error");

const theMessage = document.querySelector(".theMessage");

let counter = 0;

////////////////////////////////////////////////////////////////////////
//This is my text box function 


var nameBasket = " ";
    
function greetName(list) {

    var currentList = list;

    for (var i = 0; i < currentList.length; i++) {

        var currentName = currentList[i].trim();

        if (currentName === " ") {
           return nameBasket;
        }
    }
}
/////////////////////////////////////////////////////////////////////////////
/*
This is my radio checker
*/

var valueLanguagesBasket = {};

function greetNameL() {

    var valueLanguages = document.querySelector("input[name='languageType']:checked");
    
    if (valueLanguages) {
        var valueLanguages = valueLanguages.value
    }

}

function englishRadio() {
    if (valueLanguages.value === "english") {
      return "Hello, " + Name + "!";
    }
  }



function afrikaansRadio() {
    if (valueLanguages.value === "afrikaans") {
        return "Haai, " + Name + "!";
    }
}

function arabicRadio() {
    if (valueLanguages.value === "arabic") {
        return "Ahlan wa sahlan, " + Name + "!";
    }
}


/////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////
function incrementCounter() {
    counter++;
    document.querySelector(".valueDisplay").innerHTML = valueDisplay;
  }

enterButton.addEventListener("click", () => {
    
    if (greetName() !== "") {
      incrementCounter();
    }
    
    });
/* What Im tryna say is that if a value is taken from Name and valueLanguages then the counter 
should increment if not it shouldnt count.
*/
/////////////////////////////////////////////////////////////////////////////
resetBtn.addEventListener("click", () => {
    counter = 0;
    valueDisplay.innerHTML = counter;
});



// reset button should return to 0 once the reset button is pressed
/////////////////////////////////////////////////////////////////////////////

enterButton.addEventListener("click", function(){ 
    
    const Name = Name.value;
     const valueLanguages = valueLanguages.value;
    
    if (Name === "") {
        theMessage.innerHTML = "Please enter your name.";
    }
    if (valueLanguages === ""){
    theMessage.innerHTML = "Please enter a language.";
    }
    
    if (valueLanguages === "" && Name === ""){
    theMessage.innerHTML = "Please enter your name and a language.";
    }
    
    else{
        const message = valueLanguages + Name;
        theMessage.innerHTML = message;
    }
    
    });








   



