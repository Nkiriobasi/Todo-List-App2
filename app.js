window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list_el = document.querySelector("#tasks");
    
    // THIS PREVENTS THE DEFAULT BEHAVIOUR (STOPS IT FROM REFRESHING THE PAGE)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // GETTING THE INPUT VALUE
        const task = input.value;

        // AN IF STATEMENT TO CHECK IF THE THE INPUT FIELD IS EMPTY ON SUBMIT
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        // ADDING THE EDIT AND DELETE BUTTONS WITH THE INPUTTED TASKS
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";  // DISPLAY AN EMPTY INPUT FIELD AFTER ADDING A TASK


        // ADDING FUNCTIONS TO THE EDIT AND DELETE BUTTONS

        // EDIT FUNCTION WHEN CLICKED
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        // DELETE FUNCTION WHEN CLICKED
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    })
})