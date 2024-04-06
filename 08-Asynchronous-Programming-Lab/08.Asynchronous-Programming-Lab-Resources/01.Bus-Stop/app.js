function getInfo() {
    const basUrl = "http://localhost:3030/jsonstore/bus/businfo/";

    const stopIdElement = document.querySelector("#stopId");
    const stopNameElement = document.querySelector("#stopName");
    const bussesNameElement = document.querySelector("#buses");

    const stopId = stopIdElement.value;
    fetch(`${basUrl}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            stopNameElement.textContent = data.name;

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                bussesNameElement.appendChild(liElement);
            }
        })
        .catch(() => {
            console.log('Something went wrong');
            stopNameElement.textContent = 'Error'
        })
}
