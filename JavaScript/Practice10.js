let count =0;
let comm=0;
function ClickLike(){
    let temp =document.querySelector('#Like');
    count++;
    temp.innerHTML="Like "+count; 
}

function ClickComment(){
    comm++;
    const comment_child=document.querySelector('#Comment');
    comment_child.innerHTML='Comment ' + comm;


    let newElement=document.createElement('div');
    newElement.innerHTML='<br>'+'The comment no: ' + comm;
    newElement.style.color='white';
    newElement.style.background='red';
    newElement.style.margin="4px";
    newElement.style.width='33%';
    const parent= document.querySelector('#Main');
    parent.appendChild(newElement);
}