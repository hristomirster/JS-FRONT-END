function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    
    for (const profileElement of profileElements) {
        const showButtonELement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');
        const additionalElement = showButtonELement.parentElement.querySelector('div:last-of-type');

        showButtonELement.addEventListener('click', (e) => {

            if(!lockRadioElement.checked) {
                
                if(showButtonELement.textContent === 'Show more') {
                    additionalElement.style.display = 'block';
                    showButtonELement.textContent = 'Hide it';
                } else {
                    additionalElement.style.display = 'none';
                    showButtonELement.textContent = 'Show more';
                }
            }
        })
    }
}
