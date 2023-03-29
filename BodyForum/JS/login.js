const email = document.querySelector("#email");
const password = document.querySelector("#password");
const wrong = document.querySelector("#result");

const login = () => {
    if (email.value.trim() !== '' && password.value.trim() !== '') {
        window.location.href = '../Podstrony/index-logged-in.html';
    }
    else {
        wrong.innerHTML = "Wprowadź poprawne dane."
    }
}

const hide = () => {
    const usericon1 = document.querySelector("#emot1");
    const usericon2 = document.querySelector("#emot2");
    if (email.value !== ' '){
     usericon1.remove();
    }
    if (password.value !== ' '){
     usericon2.remove();
    }
    console.log(usericon1, usericon2);
}

const inputs = document.getElementsByClassName('input')

for (let i=0; i<inputs.length;) {
    inputs[i].addEventListener('click', hide);
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#btn").addEventListener('click', login, false); 
})