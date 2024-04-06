function addItem() {
    const textInput = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const newItem = document.createElement('li');
    newItem.textContent = textInput.value;

    items.appendChild(newItem);
    textInput.value = '';
}