export const weightInput = document.querySelector("#weight");
export const heightInput = document.querySelector("#height");
export const weightValue = document.querySelector("#weight").value;
export const heightValue = document.querySelector("#height").value;
export const isEmpty = (value) => {
    
    if (value === " "){
        
    }
    else return true;
};

export const result = document.querySelector("#result");
export const in_result = (text) => {"Twoje " + text + "wynosi: "};
export const right_data = "Podaj poprawne dane.";