function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";

    const phonebookElements = document.getElementById("phonebook");
    const loadButton = document.getElementById("btnLoad");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createButton = document.getElementById("btnCreate");
    // const deleteButton = document.querySelector('button[value=2d5ae478-87c7-45fa-acf9-f04aa4724421]');

    let allContacts = {};

    loadButton.addEventListener("click", async () => {
        phonebookElements.innerHTML = "";
        let contactRequest = await fetch(baseUrl);
        allContacts = await contactRequest.json();
        // console.log(allContacts);

        // for (const contact of Object.values(allContacts)) {
        //     const deleteButton = document.createElement('button');
        //     const liCreate = document.createElement('li');
        //     console.log(contact);
        //     deleteButton.value = contact._id;
        //     deleteButton.textContent = 'Delete'
        //     liCreate.textContent = `${contact.person}: ${contact.phone}`;

        //     liCreate.appendChild(deleteButton);
        //     phonebookElements.appendChild(liCreate);
        // };

        for (const contact of Object.entries(allContacts)) {
            const deleteButton = document.createElement("button");
            const liCreate = document.createElement("li");
            console.log(contact);
            deleteButton.value = contact[0];
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', async () => {
                fetch(baseUrl + `/${contact[0]}`, {
                    method: 'DELETE'
                })
                liCreate.remove();
            });

            liCreate.textContent = `${contact[1].person}: ${contact[1].phone}`;
            liCreate.appendChild(deleteButton);
            phonebookElements.appendChild(liCreate);

        }
    });
}

attachEvents();
