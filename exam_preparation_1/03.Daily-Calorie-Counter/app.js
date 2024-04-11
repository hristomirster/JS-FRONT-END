const baseUrl = "http://localhost:3030/jsonstore/tasks";

const foodInput = document.querySelector("#food");
const timeInput = document.querySelector("#time");
const caloriesInput = document.querySelector("#calories");
const divIdList = document.querySelector("#list");
const formElement = document.getElementById("form");

const loadButton = document.querySelector("#load-meals");
loadButton.addEventListener("click", loadMealEvents);

const addNewMealBtn = document.querySelector("#add-meal");
addNewMealBtn.addEventListener("click", addNewMealElement);

const editMealBtn = document.querySelector("#edit-meal");
editMealBtn.addEventListener("click", editMealElement);

allPosts = {};

async function loadMealEvents() {
    divIdList.innerHTML = "";
    let allMealResponse = await fetch(baseUrl);
    allPosts = await allMealResponse.json();
    console.log(allPosts);

    for (const meal of Object.entries(allPosts)) {
        const divElement = document.createElement("div");
        divElement.classList.add("meal");

        const h2Meal = document.createElement("h2");
        h2Meal.textContent = meal[1].food;
        const h3Time = document.createElement("h3");
        h3Time.textContent = meal[1].time;
        const h3Calories = document.createElement("h3");
        h3Calories.textContent = meal[1].calories;

        const divMealBtnElement = document.createElement("div");
        divMealBtnElement.setAttribute("id", "meal-buttons");

        const buttonChange = document.createElement("button");
        buttonChange.addEventListener("click", changeMeal);

        function changeMeal() {
            formElement.setAttribute("data-id", meal[1]._id);
            foodInput.value = meal[1].food;
            timeInput.value = meal[1].time;
            caloriesInput.value = meal[1].calories;
            addNewMealBtn.disabled = true;
            editMealBtn.disabled = false;
            divIdList.removeChild(divElement);
        }
        buttonChange.setAttribute("class", "change-meal");
        buttonChange.textContent = "change";

        const buttonDelete = document.createElement("button");
        buttonDelete.addEventListener("click", deleteMeal);
        async function deleteMeal() {
            await fetch(`${baseUrl}/${meal[1]._id}`, {
                method: "DELETE",
            });
            loadMealEvents();
        }
        buttonDelete.setAttribute("class", "delete-meal");
        buttonDelete.textContent = "delete";

        divElement.appendChild(h2Meal);
        divElement.appendChild(h3Time);
        divElement.appendChild(h3Calories);
        divElement.appendChild(divMealBtnElement);
        divMealBtnElement.appendChild(buttonChange);
        divMealBtnElement.appendChild(buttonDelete);

        divIdList.appendChild(divElement);
    }
}

async function addNewMealElement() {
    let food = foodInput.value;
    let time = timeInput.value;
    let calories = caloriesInput.value;

    let sendMsgElement = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            food,
            time,
            calories,
        }),
    });

    foodInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";

    loadMealEvents();
}

async function editMealElement() {
    const mealId = formElement.getAttribute("data-id");
    let food = foodInput.value;
    let time = timeInput.value;
    let calories = caloriesInput.value;

    await fetch(`${baseUrl}/${mealId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            _id: mealId,
            food,
            calories,
            time,
        }),
    });

    foodInput.value = "";
    timeInput.value = "";
    caloriesInput.value = "";

    addNewMealBtn.disabled = false;
    editMealBtn.disabled = true;

    loadMealEvents();
}
