window.addEventListener("load", solve);

function solve() {
    const placeInput = document.querySelector("#place");
    const actionInput = document.querySelector("#action");
    const personInput = document.querySelector("#person");
    const taskLists = document.querySelector("#task-list");
    const doneLists = document.querySelector("#done-list");
    const addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", addTasks);

    function addTasks() {
        if (
            placeInput.value == "" ||
            actionInput.value == "" ||
            personInput.value == ""
        ) {
            return;
        }

        const li = document.createElement("li");
        li.classList.add("clean-task");
        const article = document.createElement("article");
        const pPlace = document.createElement("p");
        pPlace.textContent = `Place:${placeInput.value}`;
        const pAction = document.createElement("p");
        pAction.textContent = `Action:${actionInput.value}`;
        const pPerson = document.createElement("p");
        pPerson.textContent = `Person:${personInput.value}`;

        const divButtons = document.createElement("div");
        divButtons.classList.add("buttons");
        const editButton = document.createElement("button");
        editButton.addEventListener("click", editTask);

        let butonPlace = placeInput.value;
        let butonAction = actionInput.value;
        let butonPerson = personInput.value;

        function editTask() {
            placeInput.value = butonPlace;
            actionInput.value = butonAction;
            personInput.value = butonPerson;
            taskLists.removeChild(li);
        }
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        const doneButton = document.createElement("button");
        doneButton.addEventListener("click", doneTask);

        function doneTask() {
            li.removeChild(divButtons);
            const deleteButton = document.createElement('button');
            deleteButton.addEventListener('click', deleteTask);

            function deleteTask() {
                doneLists.removeChild(li);
            }

            deleteButton.textContent = 'Delete';
            li.appendChild(deleteButton);
            taskLists.removeChild(li);
            doneLists.appendChild(li);
        }

        doneButton.classList.add("done");
        doneButton.textContent = "Done";

        article.appendChild(pPlace);
        article.appendChild(pAction);
        article.appendChild(pPerson);

        divButtons.appendChild(editButton);
        divButtons.appendChild(doneButton);

        li.appendChild(article);
        li.appendChild(divButtons);

        taskLists.appendChild(li);

        placeInput.value = "";
        actionInput.value = "";
        personInput.value = "";
    }
}