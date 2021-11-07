function solve() {
    let divElementCollection = document.querySelectorAll('.admin-view .action form div');
    let addButtonElement = divElementCollection[3].children[0];
    addButtonElement.addEventListener('click', addButtonHandler);
    let datesObj = {};

    function addButtonHandler(e) {
        e.preventDefault();
        let divElementCollection = document.querySelectorAll('.admin-view .action form div');
        let lectureNameElement = divElementCollection[0].children[1];
        let dateElement = divElementCollection[1].children[1];
        let moduleElement = divElementCollection[2].children[1];

        if (validateInputs(lectureNameElement.value, dateElement.value, moduleElement.value) === false) {
            return;
        }

        let modulesListElement = document.querySelector('.user-view .modules');

        if (checkIfModuleExists(Array.from(modulesListElement.children), moduleElement.value) === false) {
            let currentModule = createModule(moduleElement.value);
            modulesListElement.appendChild(currentModule);
        }

        let targetedModule = getModule(Array.from(modulesListElement.children), moduleElement.value);

        let newLecture = createLecture(lectureNameElement.value, dateElement.value, datesObj);
        let lectureDate = getDate(dateElement.value);

        datesObj[lectureDate] = newLecture;

        datesObj = sortDates(datesObj);

        

        setLectures(datesObj, targetedModule, modulesListElement);

        lectureNameElement.value = '';
        dateElement.value = '';
        moduleElement.value = 'Select module';
    }


    function validateInputs(lecture, date, module) {
        if (!(lecture.trim() == '' || date.trim() == '' || module == 'Select module')) {
            return true;
        }
        return false;
    }

    function createModule(module) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'module');

        let moduleh3Element = document.createElement('h3');
        moduleh3Element.textContent = `${module.toUpperCase()}-MODULE`;

        divElement.appendChild(moduleh3Element);
        let ulElement = document.createElement('ul');
        divElement.appendChild(ulElement);

        return divElement;
    }

    function checkIfModuleExists(modulesArray, moduleName) {
        let isName = false;

        for (let el of modulesArray) {
            let currentModuleName = el.children[0].textContent;
            if (currentModuleName === `${moduleName.toUpperCase()}-MODULE`) {
                isName = true;
                break;
            }
        }

        return isName;
    }

    function getModule(modulesArray, moduleName) {
        let moduleElement = undefined;
        for (let el of modulesArray) {
            let currentModuleName = el.children[0].textContent;
            if (currentModuleName === `${moduleName.toUpperCase()}-MODULE`) {
                moduleElement = el;
                break;
            }
        }
        return moduleElement;
    }
    function getDate(dateInfo) {
        let date = dateInfo.split('T');
        let editedDate = date[0].replace('-', '/').replace('-', '/');
        return editedDate;
    }



    function createLecture(name, dateInfo) {
        let editedDate = getDate(dateInfo);
        let time = dateInfo.split('T')[1];
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'flex');
        let h4Element = document.createElement('h4');
        h4Element.textContent = `${name} - ${editedDate} - ${time}`;
        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.setAttribute('class', 'red');
        deleteButtonElement.textContent = 'Del';
        deleteButtonElement.addEventListener('click', deleteButtonHandler)
        liElement.appendChild(h4Element);
        liElement.appendChild(deleteButtonElement);
        liElement.setAttribute('lecture-date', editedDate);
        return liElement;
    }

    function deleteButtonHandler(e) {
        let currentModule = e.currentTarget.parentElement.parentElement.parentElement;
        let lecturesList = e.currentTarget.parentElement.parentElement;
        let currentLecture = e.currentTarget.parentElement;

        let currentLectureDate = currentLecture.getAttribute('lecture-date');

        delete datesObj[currentLectureDate];
        currentLecture.remove();

        if (lecturesList.children.length === 0) {
            currentModule.remove();
        }


    }

    function sortDates(datesObject) {
        let datesArray = Object.keys(datesObject);
        sortedDatesObject = datesArray
        .sort((a,b) => a.localeCompare(b)).
        reduce((obj, key) => {
            obj[key] = datesObject[key];
            return obj;
        },
        {})

        return sortedDatesObject;
    }

    function setLectures(datesObject, moduleEl) {
        let listWithLectures = moduleEl.children[1];
        listWithLectures.innerHTML = '';
        for (let key in datesObject) {
            listWithLectures.appendChild(datesObject[key]);
        }
    }
}


// function solve() {
//     let addNewLectureForm = document.querySelector('div.action form');

//     addNewLectureForm.addEventListener('submit', addLectureFormHandler)

//     let modules = {};

//     function addLectureFormHandler(e) {
//         e.preventDefault();
//         let currentFormElement = e.target;

//         let formData = new FormData(currentFormElement);

//         let lectureName = formData.get('lecture-name');
//         let dateValue = formData.get('lecture-date');

//         let moduleValue = formData.get('lecture-module');

//         if (!(validateInputFields(lectureName, dateValue, moduleValue))) {
//             return;
//         }
//         let [date, time] = dateValue.split('T');

//         if (!(modules[moduleValue])) {
//             modules[moduleValue] = [];
//         }
        
//         let currentLecture = {name : lectureName, date: getFormatedDate(date), time};

//         modules[moduleValue].push(currentLecture);

//         createTrainings(modules);
//     }

//     function createTrainings(modules) {
//         let modulesDivElement = document.querySelector('div.modules');
//         // for (const child of modulesDivElement.children) {
//         //     child.remove();
//         // }

//         modulesDivElement.innerHTML = '';
//         for (const module in modules) {
//             let moduleElement = createModule(module);
//             let lectureListElement = moduleElement.querySelector('ul');

//             let lectures = modules[module];

//             lectures = lectures.sort((a,b) => a['date'].localeCompare(b['date']));

//             lectures.forEach(lecture => {
//                 let lectureElement = createLecture(lecture['name'], lecture['date'], lecture['time'], module);

//                 lectureListElement.appendChild(lectureElement);
//             })
//             modulesDivElement.appendChild(moduleElement);
//         }
//     }

//     function validateInputFields(lectureName, data, module) {
//         if (lectureName.trim() !== '' || data !== '' || module !== 'Select module') {
//             return true;
//         }
//         return false;
//     }

//     function getFormatedDate(date) {
//         date = date.replace('-', '/');
//         date = date.replace('-', '/');
//         return date;
//     }

//     function createLecture(lectureName, date, time, moduleName) {
//         let editedDate = getFormatedDate(date);

//         let h4Element = createElement('h4', {}, `${lectureName} - ${editedDate} - ${time}`);
//         let deleteButton = createElement('button', {'class' : 'red'}, 'Del');
//         deleteButton.addEventListener('click', deleteButtonHandler)

//         let liElement = createElement('li', {'class': 'flex'}, h4Element, deleteButton);
//         liElement.dataset.lectureName = lectureName;
//         liElement.dataset.date = editedDate;
//         liElement.dataset.time = time;
//         liElement.dataset.moduleName = moduleName;

//         return liElement;
//     }

//     function deleteButtonHandler(e) {
//         let lectureElement = e.target.parentElement;

//         let lectureName=  lectureElement.dataset.lectureName;
//         let date = lectureElement.dataset.date;
//         let time = lectureElement.dataset.time;
//         let moduleName = lectureElement.dataset.moduleName

//         modules[moduleName] = modules[moduleName]
//         .filter(lecture => !(lecture['name'] == lectureName && lecture['date'] == date && lecture['time'] == time));

//         let moduleListElement = e.target.parentElement.parentElement;
//         let moduleDivElement = e.target.parentElement.parentElement.parentElement;
//         lectureElement.remove();
//         let lecturesCount = getLecturesCount(moduleListElement);

//         if (lecturesCount === 0) {
//             moduleDivElement.remove();
//         }

//     }

//     function getLecturesCount(moduleElement) {
//         return moduleElement.children.length
//     }

//     function createModule(moduleName) {
//         let h3Element = createElement('h3',{}, `${moduleName.toUpperCase()}-MODULE`);
//         let ulElement = createElement('ul', {});
//         let divElement = createElement('div', {'class': 'module'}, h3Element, ulElement);
//         return divElement;
//     }

//     function createElement(tag, attributes, ...params) {
//         let element = document.createElement(tag);

//         let firstValue = params[0];
//         if (params.length == 1 && typeof firstValue !== 'object') {
//             if (['input', 'textarea'].includes(tag) && typeof firstValue !== 'object') {
//                 element.value = firstValue;
//             } else {
//                 element.textContent = firstValue;
//             }
//         } else {
//             for (const param of params) {
//                 element.appendChild(param);
//             }
//         }

//         for (const key of Object.keys(attributes)) {
//             element.setAttribute(key, attributes[key]);
//         }       
//         return element;
//     }
// }