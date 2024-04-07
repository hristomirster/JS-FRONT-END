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

        for (const contact of Object.values(allContacts)) {
            const buttonCreate = document.createElement('button');
            const liCreate = document.createElement('li');
            console.log(contact);
            buttonCreate.value = contact._id;
            buttonCreate.textContent = 'Delete'
            liCreate.textContent = `${contact.person}: ${contact.phone}`;

            liCreate.appendChild(buttonCreate);
            phonebookElements.appendChild(liCreate);            
        };        

    });

    // deleteButton.addEventListener('click', () => {
    //     console.log("button value = 2d5ae478-87c7-45fa-acf9-f04aa4724421");
    // })
}

attachEvents();
