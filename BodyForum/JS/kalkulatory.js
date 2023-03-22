





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



function showGender() {
    var ele = document.getElementsByName('genders');  
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                var value = i;
                calcTDEE(value);
            }
        }         
}

activity = ['1,0','1,2','1,4','1,6','1,8','2','2,2'];


function calcTDEE(value) {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let age = document.querySelector('#age').value;
    let BMR = '';
    if (value === 0) {
        BMR = (66.47 + (13.75*weight) + (5*height) + (6,75*age));
        console.log(BMR);
    }
    else {
        BMR = (665.09 + (9.56*weight) + (1.85 * height) - (4.67 * age));
        console.log(BMR);
    }
}












