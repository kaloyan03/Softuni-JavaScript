let notification = document.querySelector('div#errorBox');
let notificationSpan = document.querySelector('div#errorBox span');


export function notify(message) {
    notificationSpan.textContent = message;  

    notification.style.display = 'block'

    setTimeout(() => { notification.style.display = 'none'}, 3000)
}