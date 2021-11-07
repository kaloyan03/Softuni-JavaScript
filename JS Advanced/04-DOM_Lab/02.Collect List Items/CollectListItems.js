function extractText() {
    let list = document.querySelectorAll('li');
    listArray = Array.from(list);
    textArea = document.getElementById('result');
    textArea.value = listArray.map(e => e.textContent).join('\n');
}