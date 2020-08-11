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

    let newComment=document.querySelector('#commentInput').value;
    let newElement =document.querySelector('#Additional').cloneNode(true);
    // newElement.removeAttribute('id');

    newElement.style.background='red';
    newElement.style.margin="4px";
    newElement.style.width='33%';
    newElement.style.justifyContent='space-between';
    newElement.childNodes[0].innerHTML=newComment;
    const parent= document.querySelector('#Additional');
    
    parent.appendChild(newElement);
}