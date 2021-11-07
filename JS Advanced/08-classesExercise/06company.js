class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        this._validateParameters(name);
        this._validateParameters(position);
        this._validateParameters(department);

        if (salary < 0 || !salary) {
            throw new Error('Invalid input!');
        }

        // if (!name || !salary || salary < 0 || !position || !department) {
        //     throw new Error("Invalid input!");
        // }
        
        if (department in this.departments === false) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position,
        });
        
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let highestAvrgSalary = 0;
        let bestDepartmentName = '';
        for (const key in this.departments) {
            let currentAvrgSalary = 0;
            for (const employee of this.departments[key]) {
                currentAvrgSalary += employee['salary'];
            }
            currentAvrgSalary /= this.departments[key].length;
            if (currentAvrgSalary > highestAvrgSalary) {
                highestAvrgSalary = currentAvrgSalary;
                bestDepartmentName = key;
            }
        }

        let bestDepartmentWorkers = this.departments[bestDepartmentName];
        let sortDepartmentAscending = bestDepartmentWorkers.sort(function (a,b) {
            let n = b['salary'] - a['salary'];
            if (n !== 0) {
                return n;
            }

            return a['name'].localeCompare(b['name']);
        });

        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${highestAvrgSalary.toFixed(2)}\n`;
        
        let workersResult = [];
        for (const obj of sortDepartmentAscending) {
            workersResult.push(`${obj['name']} ${obj['salary']} ${obj['position']}`);
        }
        result += workersResult.join('\n');
        return result;

    }

    _validateParameters(parameter) {
        if (parameter == '' || parameter == undefined || parameter == null) {
            throw new Error('Invalid input!');
        }
        return true;
    }

}

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());


// let c = new Company();

// let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");

// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");

// console.log(c.bestDepartment());

