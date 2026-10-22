
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addItemButton");
const taskList = document.getElementById("taskList");
const notification = document.querySelector(".notification");
const closeNotificationButton = document.querySelector(".close-notification");
const addText = document.querySelector("input")


addTaskButton.addEventListener("click", () => {
     if (taskInput.value.trim() === "") {
        return;
    }

    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    const taskContainer = document.createElement("div");
    const taskText = document.createElement("p");
    const taskLink = document.createElement("button");


    taskCheckbox.type = "checkbox";

    taskText.textContent = taskInput.value;
    
    taskInput.value = "";

    taskItem.append(taskCheckbox);
    taskItem.append(taskContainer);
    taskItem.append(taskText);
    taskItem.append(taskLink);

    taskList.prepend(taskItem);


    taskItem.classList.add("task-item")

    taskCheckbox.type = "checkbox";


    taskLink.addEventListener("click", () => {
        taskItem.remove();
        notification.classList.remove("disabledNotification");
        setTimeout(() => {
            notification.classList.add("disabledNotification");
        }, 7000);
        closeNotificationButton.addEventListener("click", () => {
            notification.classList.add("disabledNotification");

        })
    });

});
