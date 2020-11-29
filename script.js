const input = document.querySelector('#input');
const button = document.querySelector('#submit');


function inputLength() {
    return input.value.length;
}

function thanksAfterClick() {
    if (inputLength() > 0) {
        alert("Thanks for subscribing our newsletter");
        input.value = "";
    }
    else {
        alert("Please enter your email");
    }
    
}
 
function thanksAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        alert("Thanks for subscribing our newsletter");
        input.value = "";
    }
    else if (event.which === 13 && inputLength() < 0) {
        alert("Please enter your email");
    }    
}

button.addEventListener("click", thanksAfterClick);

input.addEventListener("keypress", thanksAfterKeypress);