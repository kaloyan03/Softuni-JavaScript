function getInfo() {
    let inputElement = document.getElementById('stopId');
    let inputValue = inputElement.value;

    let busUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let currentBusStopsUrl = `${busUrl}/${inputValue}`;

    fetch(currentBusStopsUrl)
    .then(response => response.json())
    .then(busStop => {
        let stopName = busStop['name'];
        let busses = busStop['buses'];

        let stopDivElement = document.querySelector('#result #stopName');

        
        stopDivElement.textContent = stopName;

        let bussesUlElement = document.querySelector('#result #buses');
        
        Array.from(bussesUlElement.children).forEach(li => li.remove());

        for (const [key, value] of Object.entries(busses)) {
            let liElement = document.createElement('li');
            let currentBusInfo = `Bus ${key} arrives in ${value} minutes`;
            liElement.textContent = currentBusInfo;
            bussesUlElement.appendChild(liElement);
        }
    })
    .catch(err => {
        let stopDivElement = document.querySelector('#result #stopName');
        stopDivElement.textContent = 'Error';
        let bussesUlElement = document.querySelector('#result #buses');
        Array.from(bussesUlElement.children).forEach(li => li.remove());
    })

}