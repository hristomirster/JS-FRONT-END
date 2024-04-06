function subtract() {
    let inputElements = document.querySelectorAll('input');
    let resultElement = document.getElementById('result')
    
    let num1 = 0;
    let num2 = 0;
    
    for(let i = 0; i < inputElements.length; i++ ) {
        if (i == 0) {
            num1 = Number(inputElements[0].value);
        } else {
            num2 = Number(inputElements[1].value);
        }
    }
    
    resultElement.textContent = (num1 - num2);
    // console.log(resultElement.textContent);
}