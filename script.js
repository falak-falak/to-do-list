let inputBox = document.getElementById('input-box');
let listContainer = document.querySelector('.list-container');
let inputBtn = document.getElementById('btn');

//create a functions which will add a new task by clicking on the 'add' button.
function addTask() {
    if(inputBox.value === "") {
        alert('Enter any task.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.classList.add('close');
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();

}



//create a function which will either check or uncheck the task list after clicking on the list item element.
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);


//task: on reloading the page or closing the tab/browser the data should not remove.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();

