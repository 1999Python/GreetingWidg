
const valueLanguages = document.querySelector(".radioB");

const enterButton = document.querySelector(".enter");

const Name = document.querySelector(".textBox");

const valueDisplay = document.querySelector(".valueDisplay");

const resetBtn = document.querySelector(".resetBtn");

const errorElement = document.querySelector(".error");

let counter = 0;
////////////////////////////////////////////////////////////////////////



function greetNameText(){

    var Name = textBox.value; 
    
    }
/////////////////////////////////////////////////////////////////////////////
function greetNameL() {

    var valueRadioBtn = valueLanguages.value;

    var valueRadioBtn = document.querySelector("input[name='languageType']:checked");
    if (valueRadioBtn) {
        var valueRadioBtn = checkRadioBtn.value
    }

}
function englishRadio() {
    if (valueRadioBtn === "english") {
        let
        return + Name;
    }
}


function afrikaansRadio() {
    if (valueRadioBtn === "afrikaans") {
        return valueRadioBtn + Name;
    }
}

function arabicRadio() {
    if (valueRadioBtn === "arabic") {
        return valueRadioBtn + Name;
    }
}

/////////////////////////////////////////////////////////////////////////////


enterButton.addEventListener("click", () => {
    counter++;
    valueDisplay.innerHTML = counter;
})

resetBtn.addEventListener("click", () => {
    counter = 0;
    valueDisplay.innerHTML = counter;
})

enterButton.addEventListener("click",greetNameText);







