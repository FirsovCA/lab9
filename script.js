function changeText () {
    const element = document.getElementById("text");
    element.innerHTML = "Modified Text";
}

function changeColor () {
    const element = document.getElementById("colorBox");

    if (element.style.backgroundColor === "red") {
        element.style.backgroundColor = 'green';
    } else  element.style.backgroundColor = 'red';
}

function updateValue () {
    const inputElement = document.getElementById("myInput");
    inputElement.value = "Modified Value";
}

function removeElement () {
    const element = document.getElementById("removeText");
    if (element) element.parentNode.removeChild(element);
}

