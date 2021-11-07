function solve() {
  //get elements
  generateButtonElement = document.querySelectorAll('button')[0];
  generateTextAreaElement = document.querySelectorAll('textarea')[0];

  buyButtonElement = document.querySelectorAll('button')[1];
  buyTextAreaElement = document.querySelectorAll('textarea')[1];

  tableBodyElement = document.querySelector('.table tbody');

  //add event listener to generate button
  generateButtonElement.addEventListener('click', function () {
    generateTextAreaElementArray = JSON.parse(generateTextAreaElement.value);
    
    generateTextAreaElementArray.forEach(productObject => {
      // create tr for each element
      currentTr = document.createElement('tr');
      
      //create td for each key in object
      imageTd = document.createElement('td');
      //create img element
      imageElement = document.createElement('img');
      imageElement.setAttribute('src', productObject['img']);
      imageTd.appendChild(imageElement);

      nameTd = document.createElement('td');
      paragraphElement1 = document.createElement('p');
      paragraphElement1.textContent = productObject['name'];
      nameTd.appendChild(paragraphElement1);

      priceTd = document.createElement('td');
      paragraphElement2 = document.createElement('p');
      paragraphElement2.textContent = productObject['price'];
      priceTd.appendChild(paragraphElement2);

      decFactorTd = document.createElement('td');
      paragraphElement3 = document.createElement('p');
      paragraphElement3.textContent = productObject['decFactor'];
      decFactorTd.appendChild(paragraphElement3);


      markTd = document.createElement('td');
      inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'checkbox');
      markTd.appendChild(inputElement);

      currentTr.appendChild(imageTd);
      currentTr.appendChild(nameTd);
      currentTr.appendChild(priceTd);
      currentTr.appendChild(decFactorTd);
      currentTr.appendChild(markTd);

      //attach tr to table body element
      tableBodyElement.appendChild(currentTr);
    })
  })

  //add event listener to buy button

  buyButtonElement.addEventListener('click', function() {
    boughtElements = [];
    totalPrice = 0;
    decorationFactor = 0;

    let trElements = tableBodyElement.children;
    for (trElement of trElements) {
      allTdElements = trElement.children;
      checkboxTdElement = allTdElements[4];
    counter = 0;
      if (checkboxTdElement.children[0].checked == true) {
        boughtElements.push(allTdElements[1].textContent);
        totalPrice += Number(allTdElements[2].textContent);
        decorationFactor += Number(allTdElements[3].textContent);
        counter ++;
      }

    }
    averageDecorationFactor = decorationFactor / boughtElements.length;
    resultText = `Bought furniture: ${boughtElements.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`;
    if (!counter == 0){
      buyTextAreaElement.textContent = resultText;
    } 

  })


}