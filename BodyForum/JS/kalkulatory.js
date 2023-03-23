





/*Kalkulator BMI */

let button = document.querySelector("#btn");
if(button){
    button.addEventListener('click', calcBMI ,false);
}

function calcBMI() {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;

    
   if (weight === '' || height === '') { 
    document.querySelector("#result").innerHTML = 'Podaj poprawne dane.';
    return;
   }
   else {    
    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    document.querySelector("#result").innerHTML = "Twoje BMI wynosi:"+''+ bmi;
   }  
}


/*  TDEE */

function TDEE() {
    var ele = document.getElementsByName('genders');
    const selectedOption = document.getElementById("activity").value;
    for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                var value = i;
                let BMR;
                calcBMR(value,BMR,selectedOption);
               
            }
        }
    }     

function calcBMR(value,BMR,selectedOption) {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let age = document.querySelector('#age').value;
    if (value === 0) {
        BMR = (66.47 + (13.75*weight) + (5*height) + (6,75*age));
        BMR = parseInt(BMR)
        multiply(selectedOption,BMR);
    }
    else if(value === 1) {
        BMR = (665.09 + (9.56*weight) + (1.85 * height) - (4.67 * age));
        BMR = parseInt(BMR)
        multiply(selectedOption,BMR);
    }
}

function multiply(selectedOption,BMR) {
    if (selectedOption === "option2") {
        BMR = BMR * 1.2;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option3") {
        BMR = BMR * 1.4;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option4") {
        BMR = BMR * 1.6;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option5") {
        BMR = BMR * 1.8;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option6") {
        BMR = BMR * 2;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
    if (selectedOption === "option7") {
        BMR = BMR * 2.2;
        document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
    }
}











