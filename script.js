let textInput = document.getElementById("item-input");
let button = document.getElementById("add-item");
let taskList = document.getElementById("task-list");

button.addEventListener("click", function() {
    if (textInput.value.trim() === "") return; 

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = textInput.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("click", function(){
        if (checkbox.checked){
            taskText.classList.add("done");
        } else {
            taskText.classList.remove("done");
        }
    })

    let delButton = document.createElement("button");
    delButton.textContent = "❌";
    delButton.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(delButton);
    taskList.appendChild(li);

    textInput.value = "";
});
