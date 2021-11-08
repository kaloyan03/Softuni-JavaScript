function encodeAndDecodeMessages() {
    //get elements
    encodeTextAreaElement = document.querySelectorAll('textarea')[0];
    encodeButtonElement = document.querySelectorAll('button')[0];

    decodeTextAreaElement =document.querySelectorAll('textarea')[1];
    decodeButtonElement = document.querySelectorAll('button')[1];

    //add event listener to encode button
    encodeButtonElement.addEventListener('click', function() {
        //parse typed value
        encodeText = encodeTextAreaElement.value;
        encodedMessage = '';
        for (char of encodeText) {
            asciiValue = char.charCodeAt(0) + 1;
            encodedMessage += String.fromCharCode(asciiValue);
        }

        decodeTextAreaElement.value = encodedMessage;
        //clear value
        encodeTextAreaElement.value = '';
    })

    decodeButtonElement.addEventListener('click', function() {
        //parse typed value
        decodeText = decodeTextAreaElement.value;
        decodedMessage = '';
        for (char of decodeText) {
            asciiValue = char.charCodeAt(0) - 1;
            decodedMessage += String.fromCharCode(asciiValue);
        }

        decodeTextAreaElement.value = decodedMessage;
    })

}