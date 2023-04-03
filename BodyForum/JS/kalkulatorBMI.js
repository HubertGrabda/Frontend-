const isEmpty = (value) => value === '';
const in_html = (txt) => "Twoje " + txt + " " + "wynosi: ";

const calcBMI = () => {
    const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
    const height_into_meters = height.value/100;
    const result = document.querySelector("#result");
    
    if(isEmpty(weight.value)) {
        weight.classList.add('showError');
        alert("Podaj poprawną masę.");  
    }
    
    if (isEmpty(height.value)) {
        height.classList.add('showError');
        alert("Podaj poprawny wzrost");
    }
    else {
        let bmi = (weight.value / (height_into_meters * height_into_meters)).toFixed(2);
        result.innerHTML = in_html("BMI") + bmi;
        height.classList.remove('showError');
        weight.classList.remove('showError');
    }

};

document.querySelector("#btn").addEventListener('click', calcBMI);
