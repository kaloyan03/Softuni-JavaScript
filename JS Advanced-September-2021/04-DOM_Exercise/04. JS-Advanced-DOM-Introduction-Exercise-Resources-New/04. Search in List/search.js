function search() {
    LiElements = Array.from(document.querySelectorAll('#towns li'));
    searchElement = document.getElementById('searchText');

    searchText = searchElement.value;

    LiElements.forEach(x => {
        x.style.textDecoration = 'none';
        x.style.fontWeight = 'normal';
    });

    let targetLis = LiElements
    .filter(x => x.textContent.includes(searchText))
    .map(x => {
    x.style.textDecoration = 'underline';
    x.style.fontWeight = 'bold';
    })

    let resultDiv = document.getElementById('result');
    resultDiv.textContent = `${targetLis.length} matches found`;


}

