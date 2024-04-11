window.addEventListener("load", solve)

function solve() {
    const expenseInputElement = document.querySelector("#expense");
    const amountInputElement = document.querySelector("#amount");
    const dateInputElement = document.querySelector("#date");
    const previewListElement = document.querySelector("#preview-list");
    const expenseListElement = document.querySelector("#expenses-list");
    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', reloadpage);

    const addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", addInformation);

    function addInformation() {
        if (
            expenseInputElement.value == "" ||
            amountInputElement == "" ||
            dateInputElement == ""
        ) {
            return;
        }
        const liExpenseItem = document.createElement("li");
        liExpenseItem.classList.add("expense-item");
        const articleExpenseItem = document.createElement("article");
        const pExpense = document.createElement("p");
        const pAmount = document.createElement("p");
        const pDate = document.createElement("p");
        const divExpenseItem = document.createElement("div");
        divExpenseItem.classList.add("buttons");
        const editButton = document.createElement("button");
        editButton.addEventListener("click", editinformation);
        editButton.classList.add("btn");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        const okButton = document.createElement("button");
        okButton.addEventListener("click", addtoExpensesField);
        okButton.classList.add("btn");
        okButton.classList.add("ok");
        okButton.textContent = "ok";

        pExpense.textContent = `Type: ${expenseInputElement.value}`;
        let expenseValue = expenseInputElement.value;
        pAmount.textContent = `Amount: ${amountInputElement.value}$`;
        let amountValue = amountInputElement.value;
        pDate.textContent = `Date: ${dateInputElement.value}`;
        let dateValue = dateInputElement.value;

        articleExpenseItem.appendChild(pExpense);
        articleExpenseItem.appendChild(pAmount);
        articleExpenseItem.appendChild(pDate);
        liExpenseItem.appendChild(articleExpenseItem);
        divExpenseItem.appendChild(editButton);
        divExpenseItem.appendChild(okButton);
        liExpenseItem.appendChild(divExpenseItem);
        previewListElement.appendChild(liExpenseItem);

        expenseInputElement.value = "";
        amountInputElement.value = "";
        dateInputElement.value = "";
        addButton.disabled = "disabled";

        function editinformation() {
            expenseInputElement.value = expenseValue;
            amountInputElement.value = amountValue;
            dateInputElement.value = dateValue;
            addButton.disabled = "";
            previewListElement.removeChild(liExpenseItem);
        }

        function addtoExpensesField() {
            expenseListElement.appendChild(liExpenseItem)
            liExpenseItem.removeChild(divExpenseItem);
            // previewListElement.removeChild(liExpenseItem);

        }
    }

    function reloadpage() {
        location.reload();
    }

}
