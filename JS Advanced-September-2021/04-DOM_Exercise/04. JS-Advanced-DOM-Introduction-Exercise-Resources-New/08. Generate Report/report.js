function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName('input'));
 
    const resultArr = [];
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];
 
    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};
 
        for (let y = 0; y < row.children.length; y++) {
            const element = row.children[y];
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(y);
                }
                continue;
            }
 
            if (checkedCols.includes(y)) {
                let propertyName = inputElements[y].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    }
    
    document.getElementById('output').value = JSON.stringify(resultArr);
}


// function generateReport() {
//     //got elements
//     allTrElements = document.querySelectorAll('tbody tr');
//     outputAreaElement = document.querySelector('div #output');
//     checkingElements = document.querySelectorAll('thead tr th');

//     // information storage
//     let storage = {'employee' : [], 'departament' : [], 'status' : [], 'dateHired' : [], 'benefits': [], 'compensation' : [], 'rating': []};


//     //parse elements
//     allTrElements.forEach(element => {
//         tdElement = element.children;
//         for (let i = 0; i < tdElement.length; i++) {
//             if (i == 0) {
//                 storage['employee'].push(tdElement[i].textContent); 
//             } else if (i == 1) {
//                 storage['departament'].push(tdElement[i].textContent);
//             } else if (i == 2) {
//                 storage['status'].push(tdElement[i].textContent);
//             } else if (i == 3) {
//                 storage['dateHired'].push(tdElement[i].textContent);
//             } else if (i == 4) {
//                 storage['benefits'].push(tdElement[i].textContent);
//             } else if (i == 5) {
//                 storage['compensation'].push(tdElement[i].textContent);
//             } else if (i == 6) {
//                 storage['rating'].push(Number(tdElement[i].textContent));
//             }
//         }
//     });

//     checkedHeaders = [];

//     for (let i = 0; i < checkingElements.length; i++) {
//         checkedNameText = checkingElements[i].textContent.slice(0, checkingElements[i].textContent.length - 1).toLowerCase();
//         arrName = checkedNameText.split(' ');
//         if (arrName.length == 2) {
//             checkedNameText = arrName[0].toLowerCase() + arrName[1][0].toUpperCase() + arrName[1].slice(1, arrName[1].length);
//         } else {
//             checkedNameText = arrName[0];
//         }


//         input = checkingElements[i].children;

//         if (input[0].checked) {
//             checkedHeaders.push(checkedNameText);

//         }
//     }

//     result = [];

//     for (let i = 0; i < 7; i ++) {
//         for (el of checkedHeaders) {
//             result.push({
//                 el: storage[el][i]
//             })
//         }
//     }

// }