let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let h3= document.getElementsByTagName("h3")[0];
let body=document.getElementsByTagName("body")[0];

function magic(){
    let colorValue1 = color1.value;
    let colorValue2 = color2.value;
    let grad=body.style.background='linear-gradient('
    + 'to right' + ', ' + colorValue1 + ', ' + colorValue2 + ')';
    h3.innerHTML=body.style.background+';';
}

color1.addEventListener('input',magic);
color2.addEventListener('input',magic);