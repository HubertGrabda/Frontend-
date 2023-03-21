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
    var weight = parseInt(document.querySelector("#weight").value);
    var height = parseInt(document.querySelector("#height").value);
    
   if (weight === '' && height === '') { 
    document.querySelector("#result").innerHTML = 'Podaj poprawne dane.'
 
   }
   else {    
    let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
    document.querySelector("#result").innerHTML = "Twoje BMI wynosi:"+''+ bmi;
   }  
}

