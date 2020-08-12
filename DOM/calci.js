var ParameterOne=document.querySelector('#Para1').value ;
var ParameterTwo =document.querySelector('#Para2').value;


var output=0;


function Addition(){
    var ParameterOne=document.querySelector('#Para1').value;
var ParameterTwo =document.querySelector('#Para2').value;
    output=Number(ParameterOne)+Number(ParameterTwo);
}

function Subtraction(){
    var ParameterOne=document.querySelector('#Para1').value;
var ParameterTwo =document.querySelector('#Para2').value;
    output=ParameterOne-ParameterTwo;
}

function Multiplication(){
    var ParameterOne=document.querySelector('#Para1').value;
var ParameterTwo =document.querySelector('#Para2').value;
    output=ParameterOne*ParameterTwo;
}

function Division() {
    var ParameterOne=document.querySelector('#Para1').value;
var ParameterTwo =document.querySelector('#Para2').value;
    output=ParameterOne/ParameterTwo;
}  
function Answer(){
    let output_element =document.querySelector('#Output');
    let newElement=document.createElement('div');

    newElement.innerHTML=output;

    output_element.appendChild(newElement);

}