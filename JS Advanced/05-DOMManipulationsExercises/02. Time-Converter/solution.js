function attachEventsListeners() {
    //get all elements
    daysInputElement = document.getElementById('days');
    daysButtonElement = document.getElementById('daysBtn');
    hoursInputElement = document.getElementById('hours');
    hoursButtonElement = document.getElementById('hoursBtn');
    minutesInputElement = document.getElementById('minutes');
    minutesButtonElement = document.getElementById('minutesBtn');
    secondsInputElement = document.getElementById('seconds');
    secondsButtonElement = document.getElementById('secondsBtn');

    //add event listeners to all buttons

    //event listener for days convert button
    daysButtonElement.addEventListener('click', function() {
        daysInputText = daysInputElement.value;
        daysValue = Number(daysInputText);
        // hours, minutes, seconds = fromDaysConvertOtherValues(daysValue);
        hours = String(daysValue * 24);
        minutes = String(daysValue * 1440);
        seconds = String(daysValue * 86400);
        
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;

    })

    // hoursButtonElement.addEventListener('click', function() {
    //     let hours = hoursInputElement.value;
    //     daysInputElement.value = hours / 24;
    //     minutesInputElement.value = hours * 60;
    //     secondsInputElement.value = hours * 60 * 60;
    // });

    hoursButtonElement.addEventListener('click', function() {
        hoursInputText = Number(hoursInputElement.value);
        daysValue = hoursInputText / 24;
        daysInputElement.value = String(daysValue);
        // hours, minutes, seconds = fromDaysConvertOtherValues(daysValue);
        hours = String(daysValue * 24);
        minutes = String(daysValue * 1440);
        seconds = String(daysValue * 86400);

        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;

    })

    minutesButtonElement.addEventListener('click', function() {
        minutesInputText = Number(minutesInputElement.value);
        daysValue = minutesInputText / 1440;
        daysInputElement.value = String(daysValue);
        // hours, minutes, seconds = fromDaysConvertOtherValues(daysValue);
        hours = String(daysValue * 24);
        minutes = String(daysValue * 1440);
        seconds = String(daysValue * 86400);

        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;

    })

    secondsButtonElement.addEventListener('click', function() {
        secondsInputText = Number(secondsInputElement.value);
        daysValue = secondsInputText / 86400;
        daysInputElement.value = String(daysValue);
        // hours, minutes, seconds = fromDaysConvertOtherValues(daysValue);
        hours = String(daysValue * 24);
        minutes = String(daysValue * 1440);
        seconds = String(daysValue * 86400);

        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;

    })



    // function fromDaysConvertOtherValues(days) {
    //     hours = String(days * 24);
    //     minutes = String(days * 1440);
    //     seconds = String(days * 86400);
    //     return hours, minutes, seconds;
    // }


}