let textbox = document.getElementById('temp');
let toFahrenheit = document.getElementById('toFahrenheit');
let toCelsius = document.getElementById('toCelsius');
let result = document.getElementById('result');
let temp = 0;

function convert() {
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * (9/5) + 32;
        result.textContent = temp.toFixed(1)+' '+"°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1)+' '+"°C";
    }
    else{
        result.textContent = "Select an unit";
    }
}