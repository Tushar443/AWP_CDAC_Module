let sample="";

function clickzero(){
    let temp=document.querySelector("#res");
    sample=sample+'0';
    temp.innerHTML=sample;
}

function clickone(){
    let temp=document.querySelector("#res");
    sample=sample+'1';
    temp.innerHTML=sample;
}
function clickclr(){
    let temp=document.querySelector("#res");
    sample="";
    temp.innerHTML=sample;
}
function clickeql(){
    
}
function clicksum(){
    let temp=document.querySelector("#res");
    sample=sample+'+';
    temp.innerHTML=sample;
}
function clicksub(){
    let temp=document.querySelector("#res");
    sample=sample+'-';
    temp.innerHTML=sample;
}
function clickmul(){
    let temp=document.querySelector("#res");
    sample=sample+'*';
    temp.innerHTML=sample;
}
function clickdiv(){
    let temp=document.querySelector("#res");
    sample=sample+'/';
    temp.innerHTML=sample;
}
