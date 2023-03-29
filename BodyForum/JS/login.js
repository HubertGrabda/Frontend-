const emailInput = document.querySelector("#email");
const password = document.querySelector("#password");
const wrong = document.querySelector("#result");

const isEmailValid = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
}

const validate = () => {
    const email = emailInput.value;
    if (!isEmailValid(email)){
        alert('Podaj poprawny e-mail!');
        return false;
    }
    return true;
}

const login = () => {
    if (email.value.trim() !== '' && password.value.trim() !== '') {
        window.location.href = '../Podstrony/index-logged-in.html';
    }
    else {
        wrong.innerHTML = "Wprowadź poprawne dane."
    }
}

const emoticon1 = document.querySelector("#emot1");
const emoticon2 = document.querySelector("#emot2");

email.addEventListener('click', () => {
    if(emailInput.value === ""){
        emoticon1.remove();
    }
})

password.addEventListener('click', () => {
    if (password.value === ""){
        emoticon2.remove();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#btn").addEventListener('click', login, false); 
})