function toggle() {
    button = document.getElementsByClassName('button')[0];
    content = document.getElementById('extra');

    if (button.innerHTML == 'More') {
        button.textContent = 'Less'
        content.style.display = 'block';
    } else {
        button.textContent = 'More'
        content.style.display = 'none';
    }

}