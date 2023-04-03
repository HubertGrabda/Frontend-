const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const bodyfatInput = document.querySelector("#bf"); 
const result = document.querySelector("#result");
const isEmpty = (value) => value === '';
const in_html_line_1 = (ffm) => {return "Twoja masa beztłuszczowa wynosi: " + ffm + " " + "kg" + "<br/>"};
const in_html_line_2 = (bodyfat) => {return 'Twoja masa tłuszczowa wynosi: ' + bodyfat + ' kg' + '<br/>'};
const in_html_line_3 = (ffmi) => {return 'Twoje FFMI wynosi: + ffmi'};
const wrong_data = "Podaj poprawne dane";

document.querySelector('#btn2').addEventListener('click', () => {    
    if (isEmpty(weight.value)){
        weight.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    if (isEmpty(height.value)) {
        height.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    if (isEmpty(bodyfatInput.value)) {
        bodyfatInput.classList.add('showError');
        result.innerHTML = wrong_data;
    }
    else {
        const bodyfat = weight.value * (bodyfatInput.value/100);
        const ffm = weight.value * (1 - (bodyfatInput.value/100));
        const ffmi = ((ffm / Math.pow(height.value, 2.5)) * 2.20462 / 2.2 + 6.3).toFixed(2);
        height.classList.remove('showError');
        weight.classList.remove('showError');
        bodyfatInput.classList.remove('showError');
        result.innerHTML = in_html_line_1(ffm) + in_html_line_2(bodyfat) + in_html_line_3(ffmi);
        console.log(bodyfat, ffm , ffmi, in_html_line_1(80));
    }   
})   
    
    
    
   