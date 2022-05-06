const links = document.querySelectorAll("link");
const number = document.querySelectorAll(".number");
const resultDisplay = document.querySelector('.result');
var radioBtn = document.querySelectorAll('.toggleRadio');

function display(val){
    resultDisplay.value += val;
    return val;
}

function solve(){
    let x = resultDisplay.value;
    let y = eval(x);
    resultDisplay.value = y;
    return y;
}

function resetScreen(){
    resultDisplay.value = "";
}

function deleteKey() {
    let x = resultDisplay.value;
    resultDisplay.value = x.substr(0, x.length - 1);
}

radioBtn.forEach((radioX)=>{
    radioX.addEventListener('click', ()=>{
            var theme = document.getElementsByTagName('link')[0];
            radioX.value == 0 ? theme.setAttribute('href', 'style.css') : 
            radioX.value == 1 ? theme.setAttribute('href', 'styles1.css') :
            radioX.value == 2 ? theme.setAttribute('href', 'styles2.css') :
            theme.setAttribute('href', 'style.css');
        })
})
