function attachEvents() {
    let submitButtonElement = document.getElementById('submit');

    submitButtonElement.addEventListener('click', submitButtonHandler);
    const conditionMapper = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }
    function submitButtonHandler() {
        let locationInputElement = document.getElementById('location');
        let searchedLocation = locationInputElement.value;
        let locationsInfoUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
        let weatherInfoUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
        let upcomingWeatherInfoUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
        fetch(locationsInfoUrl)
        .then(body => body.json())
        .then(locationsInfoArray => {
            let cityInfoObject = locationsInfoArray.find(arr => arr['name'] == searchedLocation);
            let cityCode = cityInfoObject['code'];
            fetch(`${weatherInfoUrl}${cityCode}`)
            .then(body => body.json())
            .then(weatherInfo => {
                let forecastDivElement = document.getElementById('forecast');
                let currentForecastDivElement = document.getElementById('current');
                
                let weatherCondition = weatherInfo['forecast']['condition'];
                let highTemperature = weatherInfo['forecast']['high'];
                let lowTemperature = weatherInfo['forecast']['low'];
                let fullName = weatherInfo['name'];
                
                let weatherDivElement = createWeatherElement(weatherCondition, highTemperature, lowTemperature, fullName);                
                currentForecastDivElement.appendChild(weatherDivElement);
                forecastDivElement.style.display = 'inline';
            })

            fetch(`${upcomingWeatherInfoUrl}${cityCode}`)
            .then(body => body.json())
            .then(upcomingWeatherInfo => {
                let upcomingDivElement = document.getElementById('upcoming');
                let upcomingWeatherArray = upcomingWeatherInfo['forecast'];
                let divElement = createUpcomingWeatherElement(upcomingWeatherArray);
                
                upcomingDivElement.appendChild(divElement);
            })
            
        })
        .catch(err => {
            // display error in the forecast section
            let divElement = document.createElement('div');
            divElement.setAttribute('class', 'label');
            divElement.textContent = 'Error';

            let currentForecastDivElement = document.getElementById('current');
            currentForecastDivElement.appendChild(divElement);
        })
    }

    function createUpcomingWeatherElement(upcomingWeatherArray) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'forecast-info');

        upcomingWeatherArray.forEach(el => {
            let currentSpanElement = document.createElement('span');
            currentSpanElement.setAttribute('class', 'upcoming');

            let weatherCondition = el['condition'];
            let highTemperature = el['high'];
            let lowTemperature = el['low'];
            let [spanSymbolElement, spanTemperatureElement, spanWeatherElement] = createSpanElements(weatherCondition, lowTemperature, highTemperature);
            
            currentSpanElement.appendChild(spanSymbolElement);
            currentSpanElement.appendChild(spanTemperatureElement);
            currentSpanElement.appendChild(spanWeatherElement);

            divElement.appendChild(currentSpanElement);
        })

        return divElement;

    }

    function createWeatherElement(weatherCondition, lowTemperature, highTemperature, fullName) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'forecasts')
        
        let spanConditionSymbol = document.createElement('span');
        spanConditionSymbol.setAttribute('class', 'condition symbol');
        spanConditionSymbol.textContent = conditionMapper[weatherCondition];
        
        divElement.appendChild(spanConditionSymbol);

        let spanCondition = document.createElement('span');
        spanCondition.setAttribute('class', 'condition');

        let [spanTemperatureElement, spanWeatherElement, spanLocationElement] = createSpanElements(weatherCondition, highTemperature, lowTemperature, fullName)
        // let spanLocationElement = document.createElement('span');
        // spanLocationElement.setAttribute('class', 'forecast-data');
        // spanLocationElement.textContent = fullName;

        // let spanTemperatureElement = document.createElement('span');
        // spanTemperatureElement.setAttribute('class', 'forecast-data');
        // spanTemperatureElement.textContent = `${lowTemperature}°/${highTemperature}°`;

        // let spanWeatherElement = document.createElement('span');
        // spanWeatherElement.setAttribute('class', 'forecast-data');
        // spanWeatherElement.textContent = weatherCondition;

        spanCondition.appendChild(spanTemperatureElement);
        spanCondition.appendChild(spanWeatherElement);
        spanCondition.appendChild(spanLocationElement);

        divElement.appendChild(spanCondition);

        return divElement;
    }

    function createSpanElements(weatherCondition, lowTemperature, highTemperature, fullName) {
        let result = [];

        if (fullName) {
            let spanLocationElement = document.createElement('span');
            spanLocationElement.setAttribute('class', 'forecast-data');
            spanLocationElement.textContent = fullName;
            result.push(spanLocationElement);
        } else {
            let spanSymbolElement = document.createElement('span');
            spanSymbolElement.setAttribute('class', 'symbol');
            spanSymbolElement.textContent = conditionMapper[weatherCondition];
            result.push(spanSymbolElement);
        }

        let spanTemperatureElement = document.createElement('span');
        spanTemperatureElement.setAttribute('class', 'forecast-data');
        spanTemperatureElement.textContent = `${lowTemperature}°/${highTemperature}°`;

        let spanWeatherElement = document.createElement('span');
        spanWeatherElement.setAttribute('class', 'forecast-data');
        spanWeatherElement.textContent = weatherCondition;

        result.push(spanTemperatureElement);
        result.push(spanWeatherElement);
    
        return result;
    }

}

attachEvents();