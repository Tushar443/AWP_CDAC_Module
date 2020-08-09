let count=0;
function Increment(){
    let temp= document.querySelector(".Dis");
    temp.innerHTML=count+1;
    count++;
}
function Decrement(){
    let temp =document.querySelector(".Dis");
    temp.innerHTML=count-1;
    count--;
}