
   
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const wrng = document.querySelector("#result");

document.querySelector("#btn").addEventListener('click', login, false);

function login() {
    if (email.value.trim() !== '' && pass.value.trim() !== '') {
        window.location.href = '../Podstrony/index-logged-in.html';
    }
    else {
        wrng.innerHTML = "Wprowadź poprawne dane."
    }
}

const inputs = document.getElementsByClassName('input')

for (let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener('click', hide, false)
}


function hide() {
   const usericon1 = document.querySelector('#emot1');
   const usericon2 = document.querySelector("#emot2");
   if (email.value !== '') {
    usericon1.remove();
   }
   if (pass !== '') {
    usericon2.remove();
   }
}