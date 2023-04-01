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
















// function calcBMI() {
//     let weight = document.querySelector("#weight").value;
//     let height = document.querySelector("#height").value;

    
//    if (weight === '' || height === '') { 
//     document.querySelector("#result").innerHTML = 'Podaj poprawne dane.';
//     return;
//    }
//    else {    
//     let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
//     document.querySelector("#result").innerHTML = "Twoje BMI wynosi:"+''+ bmi;
//    }  
// }


// let button1 = document.querySelector("#btn1");
// if (button1) {
//     button1.addEventListener('click', TDEE, false);
// }

// function TDEE() {
//     var ele = document.getElementsByName('genders');
//     const selectedOption = document.getElementById("activity").value;
//     for(i = 0; i < ele.length; i++) {
//             if(ele[i].checked) {
//                 var value = i;
//                 let BMR;
//                 calcBMR(value,BMR,selectedOption);
               
//             }
//         }
//     }     

// function calcBMR(value,BMR,selectedOption) {
//     let weight = document.querySelector("#weight").value;
//     let height = document.querySelector("#height").value;
//     let age = document.querySelector('#age').value;
//     if (value === 0) {
//         BMR = (66.47 + (13.75*weight) + (5*height) + (6,75*age));
//         BMR = parseInt(BMR)
//         multiply(selectedOption,BMR);
//     }
//     else if(value === 1) {
//         BMR = (665.09 + (9.56*weight) + (1.85 * height) - (4.67 * age));
//         BMR = parseInt(BMR)
//         multiply(selectedOption,BMR);
//     }
// }

// function multiply(selectedOption,BMR) {
//     if (selectedOption === "option2") {
//         BMR = BMR * 1.2;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
//     if (selectedOption === "option3") {
//         BMR = BMR * 1.4;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
//     if (selectedOption === "option4") {
//         BMR = BMR * 1.6;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
//     if (selectedOption === "option5") {
//         BMR = BMR * 1.8;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
//     if (selectedOption === "option6") {
//         BMR = BMR * 2;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
//     if (selectedOption === "option7") {
//         BMR = BMR * 2.2;
//         document.querySelector("#result").innerHTML = "Twoje dzienne zapotrzebowanie wynosi:"+''+ parseInt(BMR) + " " + 'kcal';
//     }
// }

// /* FFMI calcualtor */ 

// let button2 = document.querySelector("#btn2");
// if (button2) {
//     button2.addEventListener('click', calcFFMI, false);
// }

// function calcFFMI() {
//     let weight = document.querySelector("#weight").value;
//     let height = document.querySelector("#height").value;
//     let bodyfatInput = document.querySelector("#bf").value; 
    
//     if (weight !== '' || height !== '' || bodyfat !== ''){
//         const bodyfat = weight * (bodyfatInput/100);
//         const ffm = weight * (1 - (bodyfatInput/100));
//         const ffmi = (ffm / Math.pow(height, 2.5)) * 2.20462 / 2.2 + 6.3;
//         console.log(bodyfat, ffm , ffmi);
//         document.querySelector("#result").innerHTML = "Twoja masa beztłuszczowa wynosi:"+''+ (ffm) + " " + 'kg' + '<br/>' + 'Twoja masa tłuszczowa:' + (bodyfat) + 'kg' + '<br/>' + 'Twoje FFMI wynosi:' + ffmi.toFixed(2);
//     }
//     else {
//         document.querySelector("#result").innerHTML = 'Podaj poprawne dane.';
//     }

    
// }







