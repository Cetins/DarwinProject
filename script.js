const button = document.getElementById("input");
const input = document.getElementById("submit");

function inputLength() {
    return input.value.length;
}

function thanksAfterClick() {
    if (inputLength() > 0) {
        alert("Thanks for subscribing our newsletter");
    }
    else if (inputLength() < 0) {
        alert("Please enter your email");
    }
    input.value = "";
}
 
function thanksAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        alert("Thanks for subscribing our newsletter");
    }
    else if (inputLength() < 0) {
        alert("Please enter your email");
    }
    input.value = "";
}

button.addEventListener('click', thanksAfterClick, true);

input.addEventListener("keypress", thanksAfterKeypress, true);