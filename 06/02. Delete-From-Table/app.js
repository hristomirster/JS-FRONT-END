function deleteByEmail() {
    const inputEmalElement = document.querySelector('input[type="text"]');
    const emailElements = document.querySelectorAll("table tr td:nth-child(2)");

    for (const emailElement of emailElements) {
        if(emailElement.textContent === inputEmalElement.value) {
            emailElement.parentElement.remove();
            document.getElementById('result').textContent = 'Deleted.';
            inputEmalElement.value = '';
            return;
        } else {
            document.getElementById('result').textContent = 'Not Found.';
        }
        
    }
    inputEmalElement.value = '';
}