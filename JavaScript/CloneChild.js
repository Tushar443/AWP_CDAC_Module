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
}

function Edit_Comment(temp) {
    let data = temp.innerHTML;
    let mainDiv = document.createElement('div');
    let newElement = document.createElement('input');
    let save_element = document.createElement('button');
    let cancel_element = document.createElement('button');
    countid++;
    save_element.id='saveid' + countid;

    newElement.placeholder = data;
    newElement.type = 'text';
    save_element.innerHTML = 'SAVE';
    cancel_element.innerHTML = 'Cancel';

    mainDiv.appendChild(newElement);
    // mainDiv.appendChild('br');
    mainDiv.appendChild(save_element);
    mainDiv.appendChild(cancel_element);

    let parent = document.querySelector('#changeDiv');
    parent.appendChild(mainDiv);

        document.querySelector('#changeDiv').childNodes[0].childNodes[1].addEventListener.onClick=function(){
        alert('Hello');
    }



    let edit_button=document.querySelector('#Edit_button');
    edit_button.style.visibility='hidden';
}
