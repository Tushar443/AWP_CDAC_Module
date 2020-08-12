let count = 0;
let comm = 0;
let countid=0;
function ClickLike() {
    let temp = document.querySelector('#Like');
    count++;
    temp.innerHTML = "Like " + count;
}

function ClickComment() {
    comm++;
    const comment_child = document.querySelector('#Comment');
    comment_child.innerHTML = 'Comment ' + comm;

    let newComment = document.querySelector('#commentInput').value;
    let newElement = document.querySelector('#innerDiv').cloneNode(true);
    // newElement.removeAttribute('id');
    newElement.id = 'innerDiv' + comm;


    newElement.style.visibility = 'visible';
    newElement.childNodes[0].textContent = newComment;
    let parent = document.querySelector('#CommentBox');
    // parent.appendChild(newElement);
    parent.insertBefore(newElement, parent.firstChild);

    let inputBox = document.querySelector('#commentInput');
    inputBox.value = "";
}

function delete_Comment(temp) {
    temp.parentElement.remove();
    comm--;
    const comment_child = document.querySelector('#Comment');
    comment_child.innerHTML = 'Comment ' + comm;
}

function Edit_Comment(temp) {
        let ChangeDiv=document.querySelector('#changeDiv');
        ChangeDiv.style.visibility='visible';

}


function Save_Changes(temp){
    let save_element=document.querySelector('#Save_Button').value;
    let PArent_Element =document.querySelector(temp.parentElement);
    
    console.log(PArent_Element);




}



