function Validation() {
    let result = true;
    let input = document.querySelector('#User');

    if (input.value.length === 0) {
        result = false;
    }

    let main = document.querySelector("#Main");
    main.style.visibility = 'hidden';
    return result;
}

function Data() {
    let data = document.querySelector('#User').value;
    let parent = document.querySelector("#Main");
    let newElement = document.createElement('div');
    newElement.innerHTML = data;
    parent.appendChild(newElement);
}

function Change(btn) {
    // alert("Heloo");
    btn.style.background = "#f45351";
    // btn.style.background = "#c0c0c0";

}