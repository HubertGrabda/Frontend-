const result = document.querySelector("#result");
const isEmpty = (value) => value === '';
const wrong_data = "Podaj poprawne dane";


const TDEE = () => {
    const ele = document.getElementsByName('genders');
    const selectedOption = document.getElementById("activity").value;
    for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                var value = i;
                let BMR;
                calcBMR(value,BMR,selectedOption);
               
            }
        }
    }     

    const calcBMR = (value,BMR,selectedOption) => {
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const age = document.querySelector('#age');
    if (isEmpty(weight.value)){
        weight.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    if (isEmpty(height.value)) {
        height.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    if (isEmpty(age.value)) {
        age.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    else {
        height.classList.remove('showError');
        weight.classList.remove('showError');
        age.classList.remove('showError');
        if (value === 0) {
            BMR = 88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value);;
            BMR = parseInt(BMR)
            multiply(selectedOption,BMR);
            
        }
        else if(value === 1) {
            BMR = 447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value);
            BMR = parseInt(BMR)
            multiply(selectedOption,BMR);
        }
    }
}

const multiply = (selectedOption,BMR) => {
    if (selectedOption === "option1") {
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option2") {
        BMR = BMR * 1.2;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option3") {
        BMR = BMR * 1.4;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option4") {
        BMR = BMR * 1.6;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option5") {
        BMR = BMR * 1.8;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option6") {
        BMR = BMR * 2;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option7") {
        BMR = BMR * 2.2;
        result.innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+' '+ parseInt(BMR) + " " + 'kcal';
    }
}

document.querySelector("#btn1").addEventListener('click', TDEE);
