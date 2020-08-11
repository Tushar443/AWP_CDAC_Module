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
    let newElement=document.createElement('div');
    let newdiv=document.createElement('div');
    let newdelete =document.createElement('button');
    newdelete.innerHTML='Delete';
    newdiv.innerHTML=newComment;
    newElement.appendChild(newdiv);
    newElement.appendChild(newdelete);
    newElement.style.display='flex';
    newElement.style.justifyContent='space-between';
    newElement.style.color='white';
    newElement.style.background='red';
    newElement.style.margin="4px";
    newElement.style.width='33%';
    const parent= document.querySelector('#Additional');
    // parent.appendChild(newElement);
    parent.insertBefore(newElement,parent.firstChild);
}