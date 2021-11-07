function solve() {
  let textElement = document.getElementById('text');
  let conventionElement = document.getElementById('naming-convention');

  let text = textElement.value;
  let convention = conventionElement.value;

  let result = applyNamingConvention(text, convention);

  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyNamingConvention(text, convention){ 
    const conventionSwitch = {
      'Pascal Case' : () => text
      .toLowerCase()
      .split(' ')
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(''),
      
      'Camel Case' : () => text
      .toLowerCase()
      .split(' ')
      .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
      .join(''),

      default: () => 'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  
  } 
  
  
  
  
  
  
  // let text = document.getElementById('text').value;
  // let convention = document.getElementById('naming-convention').value;
  // const result = '';

  // if (convention == 'Pascal Case') {
  //   wordsArray = text.split(' ');
  //   let currentWord = '';
  //   for (word of wordsArray) {
  //     let firstLetter = word[0].toUpperCase();
  //     currentWord += firstLetter;
  //     currentWord += word.slice(1).toLowerCase();
  //   }

  //   document.getElementById('result').textContent = currentWord;

  // } else if (convention == 'Camel Case') {
  //   wordsArray = text.split(' ');
  //   let currentWord = '';
  //   currentWord += `${wordsArray[0].toLowerCase()}`

  //   for (i = 1; i < wordsArray.length; i++) {
  //     firstLetter = (wordsArray[i][0]).toUpperCase();
  //     currentWord += firstLetter;
  //     currentWord += wordsArray[i].slice(1).toLowerCase();
  //   } 
  //   document.getElementById('result').textContent = currentWord;



  // } else {
  //   document.getElementById('result').textContent = 'Error!';
  // }

}
