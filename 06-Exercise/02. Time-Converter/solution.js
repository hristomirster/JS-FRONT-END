function attachEventsListeners() {

    let daysElementValue     = document.querySelector('#days');
    let hoursElementValue    = document.querySelector('#hours');
    let minutesElementValue  = document.querySelector('#minutes');
    let secondsElementValue  = document.querySelector('#seconds');

    let daysElementBtn       = document.querySelector('#daysBtn');
    let hoursElementBtn      = document.querySelector('#hoursBtn');
    let minutesElementBtn    = document.querySelector('#minutesBtn');
    let secondsElementBtn    = document.querySelector('#secondsBtn');

    daysElementBtn.addEventListener('click', () => {
        hoursElementValue.value    = Number(daysElementValue.value) * 24;
        minutesElementValue.value  = Number(daysElementValue.value) * 1440;
        secondsElementValue.value  = Number(daysElementValue.value) * 86400;
    });

    hoursElementBtn.addEventListener('click', () => {
        daysElementValue.value     = Number(hoursElementValue.value) / 24;
        minutesElementValue.value  = Number(hoursElementValue.value) * 60;
        secondsElementValue.value  = Number(hoursElementValue.value) * 3600;
    });

    minutesElementBtn.addEventListener('click', () => {
        daysElementValue.value     = Number(minutesElementValue.value) / 1440;
        hoursElementValue.value    = Number(minutesElementValue.value) / 60;
        secondsElementValue.value  = Number(minutesElementValue.value) * 60;
    });

    secondsElementBtn.addEventListener('click', () => {
        daysElementValue.value     = Number(secondsElementValue.value) / 86400;
        hoursElementValue.value    = Number(secondsElementValue.value) / 3600;
        minutesElementValue.value  = Number(secondsElementValue.value) / 60;

    });
}