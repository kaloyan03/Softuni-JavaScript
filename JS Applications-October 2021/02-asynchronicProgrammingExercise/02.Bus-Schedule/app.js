function solve() {

    function depart() {
        let stopId = 'depot';
        let messageSpanElement = document.querySelector('#info .info');
        if (messageSpanElement.getAttribute('data-next-stop-id') !== null) {
            stopId = messageSpanElement.getAttribute('data-next-stop-id');
        }
        let departButtonElement = document.getElementById('depart');
        let arriveButtonElement = document.getElementById('arrive');
    
        
        let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';        
        
        fetch(`${baseUrl}${stopId}`)
        .then(response => response.json())
        .then(stopInfo => {
            let stopName = stopInfo['name'];
            let nextStopId = stopInfo['next'];
            messageSpanElement.setAttribute('data-stop-name', stopName);
            messageSpanElement.setAttribute('data-next-stop-id', nextStopId);

            messageSpanElement.textContent = `Next stop ${stopName}`

            departButtonElement.disabled = true;
            arriveButtonElement.disabled = false;
        })
        .catch(err => {
            let messageSpanElement = document.querySelector('#info .info');
            let departButtonElement = document.getElementById('depart');
            let arriveButtonElement = document.getElementById('arrive');
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
            messageSpanElement.textContent = `Error`;
        })
    }
    

    function arrive() {
        let messageSpanElement = document.querySelector('#info .info');
        let departButtonElement = document.getElementById('depart');
        let arriveButtonElement = document.getElementById('arrive');

        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
        let stopName = messageSpanElement.getAttribute('data-stop-name');
        messageSpanElement.textContent = `Arriving at ${stopName}`;
    }
    

    return {
        depart,
        arrive
    };
}

let result = solve();