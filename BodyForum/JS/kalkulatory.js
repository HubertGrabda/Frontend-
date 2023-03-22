const button = document.querySelector("#btn");



/* FUNKCJA POTRZEBNA DO TDEE 
function showg() {
    var ele = document.getElementsByName('genders');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                console.log(ele[i].value)
            }
}
}*/

function calcBMI() {
    var weight = document.querySelector("#weight").value;
    var height = document.querySelector("#height").value;
    
   if (weight === '' || height === '') { 
    document.querySelector("#result").innerHTML = 'Podaj poprawne dane.';
    return;
   }
   else {    
    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    document.querySelector("#result").innerHTML = "Twoje BMI wynosi:"+''+ bmi;
   }  
}

