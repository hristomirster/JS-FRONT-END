const resultElement = document.getElementById("count");
const minusEvent = document.getElementById("munus-event");
const resetEvents = document.getElementById("reset-event");
const plusEvents = document.getElementById("plus-event");


minusEvent.addEventListener('click', () => {
    resultElement.textContent = Number(resultElement.textContent) - 1; 
});

resetEvents.addEventListener('click', () => {
    resultElement.textContent = 0; 
});

plusEvents.addEventListener('click', () => {
    resultElement.textContent = Number(resultElement.textContent) + 1;
});
