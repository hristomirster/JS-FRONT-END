const orangeElement = document.getElementById('orange');
orangeElement.addEventListener('click', (e) => {
    console.log('orange');
});

const greenElement = document.getElementById('green');
greenElement.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('green');
});

const yellowElement = document.querySelector('#yellow');
yellowElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('yellow');
});