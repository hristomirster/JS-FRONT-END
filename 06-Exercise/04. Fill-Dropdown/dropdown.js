function addItem() {
    const menuOptinsElement = document.querySelector("#menu");
    const newItemText = document.querySelector("#newItemText");
    const newItemValue = document.querySelector("#newItemValue");
    const newOptionElement = document.createElement("option");
    newOptionElement.textContent = newItemText.value;
    newOptionElement.value = newItemValue.value;

    menuOptinsElement.appendChild(newOptionElement);
    newItemText.value = '';
    newItemValue.value = '';
}
