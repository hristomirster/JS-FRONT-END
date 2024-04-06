function attachEventsListeners() {
    const convertButton = document.querySelector('#convert');
    convertButton.addEventListener('click', converting);

    function converting() {
        const inputDistance = Number(document.querySelector('#inputDistance').value);
        let inputUnits = document.querySelector('#inputUnits').value;
        const outputUnits = document.querySelector('#outputUnits').value;
        let outputDistance = document.querySelector('#outputDistance');
        let convertToM = 0;
        // console.log(inputUnits);
        // console.log(outputUnits);

        if(inputUnits === 'km') {
            convertToM = inputDistance * 1000;
        } else if(inputUnits === 'cm'){
            convertToM = inputDistance / 100;
        } else {
            convertToM = inputDistance;
        };


        if(outputUnits === 'km') {
            convertToM /= 1000;
        } else if(outputUnits === 'cm'){
            convertToM *= 100;
        } else {
            convertToM = convertToM;
        };

        outputDistance.value = convertToM;



    }
}