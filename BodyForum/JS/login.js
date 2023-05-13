const inputWrap = document.querySelector(`.input-wrap`)
const emailInput = inputWrap.querySelector("#email");
const password = inputWrap.querySelector("#password");
const wrong = document.querySelector("#result");

console.log(password);

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
    if (validate() && !(password.value.trim().length === 0)){
        window.location.href = '../Podstrony/index-logged-in.html';
    }
    else {
        wrong.innerHTML = "Wprowadź poprawne dane."
    }
}

const emoticon1 = document.querySelector("#emot1");
const emoticon2 = document.querySelector("#emot2");

emailInput.addEventListener('click', () => {
    if(emailInput.value === " "){
        emoticon1.remove();
    }
})

password.addEventListener('click', () => {
    if (password.value === " "){
        emoticon2.remove();
    }
})

document.querySelector("#btn").addEventListener('click', login); 