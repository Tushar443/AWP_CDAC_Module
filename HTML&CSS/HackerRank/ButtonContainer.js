function Shiftleft(){
    let temp1 =document.querySelector("#btn1").innerHTML;
    let temp2 =document.querySelector("#btn2").innerHTML;
    let temp3 =document.querySelector("#btn3").innerHTML;
    let temp4 =document.querySelector("#btn4").innerHTML;
    let temp6 =document.querySelector("#btn6").innerHTML;
    let temp7 =document.querySelector("#btn7").innerHTML;
    let temp8 =document.querySelector("#btn8").innerHTML;
    let temp9 =document.querySelector("#btn9").innerHTML;

    let btn2=document.querySelector("#btn2");
     btn2.innerHTML=temp1;
    let btn1=document.querySelector("#btn1");
    btn1.innerHTML=temp4;
    let btn3=document.querySelector("#btn3");
    btn3.innerHTML=temp2;
     let btn4=document.querySelector("#btn4");
     btn4.innerHTML=temp7;
    let btn6=document.querySelector("#btn6");
    btn6.innerHTML=temp3;
    let btn7=document.querySelector("#btn7");
    btn7.innerHTML=temp8;
    let btn8=document.querySelector("#btn8");
    btn8.innerHTML=temp9;
    let btn9=document.querySelector("#btn9");
    btn9.innerHTML=temp6;
   
   
}