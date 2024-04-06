function addItem() {
    const newElement = document.getElementById("newItemText").value;
    const list = document.getElementById("items");

    if (newElement.length === 0) {
        alert('cannot add empty list')
        return;
    }
        
    const listItem = document.createElement("li");
    listItem.textContent = newElement;

    const removeElement = document.createElement('a');
    const linkTextDelete = document.createTextNode('[Delete]');
    removeElement.appendChild(linkTextDelete);
    removeElement.href = '#';
    removeElement.addEventListener('click', deleteItem);

    const editElement = document.createElement('a');
    const linkTextEdit = document.createTextNode('[Edit]');
    editElement.appendChild(linkTextEdit);
    editElement.href = '#';
    editElement.addEventListener('click', editItem)

    listItem.appendChild(removeElement);
    listItem.appendChild(editElement);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }

    function editItem() {
        console.log(listItem.textContent.replace('[Delete][Edit]', ''));
        document.getElementById("newItemText").value = listItem.textContent.replace('[Delete][Edit]', '');
        listItem.remove();
        return;
    }

    document.getElementById("newItemText").value = '';
}
