function solve() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let formElement = document.getElementById('form');
    loadStudents()


    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        let currentFormElement = e.currentTarget;
        
        let formData = new FormData(currentFormElement);
        
        let firstNameValue = formData.get('firstName');
        let lastNameValue = formData.get('lastName');
        let facultyNumberValue = formData.get('facultyNumber');
        let gradeValue = formData.get('grade');

        if (firstNameValue == '' || lastNameValue == '' || facultyNumberValue == '' || gradeValue == '') {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstNameValue,
                lastName: lastNameValue,
                facultyNumber: facultyNumberValue,
                grade: gradeValue,
            })
        })
        .then(body => body.json())
        .then(data => {
            loadStudents();
        })
        

    })

    function loadStudents() {
        fetch(url)
        .then(body => body.json())
        .then(students => {
            let tableBodyElement = document.getElementById('students-body');
            tableBodyElement.innerHTML = '';
            for (const value of Object.values(students)) {
                let trElement = createTableRowForStudent(value['firstName'], value['lastName'], value['facultyNumber'], value['grade'])

                tableBodyElement.appendChild(trElement);
            }
        })
    }

    function createTableRowForStudent(firstName, lastName, facultyNumber, grade) {
        let trElement = document.createElement('tr');

        let firstNameThElement = document.createElement('th');
        firstNameThElement.textContent = firstName;

        let secondNameThElement = document.createElement('th');
        secondNameThElement.textContent = lastName;

        let facultyNumberThElement = document.createElement('th');
        facultyNumberThElement.textContent = facultyNumber;

        let gradeThElement = document.createElement('th');
        gradeThElement.textContent = grade;

        trElement.appendChild(firstNameThElement);
        trElement.appendChild(secondNameThElement);
        trElement.appendChild(facultyNumberThElement);
        trElement.appendChild(gradeThElement);
    
        return trElement;
    }

}   

solve()