function solve() {
  typedElements = document.getElementById('input');

  sentences = Array.from(typedElements.value.split('.').map(x => x + '.'));
  sentences = sentences.slice(0, sentences.length - 1);


  typedElements.value = '';


  paragraphs = [];

  paragraphsRoof = Math.ceil(sentences.length / 3);

  let resultDiv = document.getElementById('output');

  for (let index = 0; index < sentences.length; index++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
    
  }

  
}