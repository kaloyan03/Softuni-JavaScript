class Sorting {
    constructor(elementToSort) {
        this.elementsToSort = elementToSort;
    }

    sortNumbersAscendingOrder() {
        this.checkTypeAndThrowError(this.elementsToSort, 'number');
        return this.elementsToSort.sort((a,b) => a - b);
    }

    sortNumbersDescendingOrder() {
        this.checkTypeAndThrowError(this.elementsToSort, 'number');
        return this.elementsToSort.sort((a,b) => b - a);
    }

    sortStringsAscendingOrder() {
        this.checkTypeAndThrowError(this.elementsToSort, 'string');
        return this.elementsToSort.sort((a,b) => a.localeCompare(b));
    }

    sortStringsDescendingOrder() {
        this.checkTypeAndThrowError(this.elementsToSort, 'string');
        return this.elementsToSort.sort((a,b) => b.localeCompare(a));
    }

    sortObjectsByCriteriaAscendingOrder(criteria) {
        this.checkTypeAndThrowError(this.elementsToSort, 'object');
        if (criteria == 'age') {
            return this.elementsToSort.sort((a,b) => a[criteria] -b[criteria]);
        }
        return this.elementsToSort.sort((a,b) => a[criteria].localeCompare(b[criteria]));
    }

    sortObjectsByCriteriaDescendingOrder(criteria) {
        this.checkTypeAndThrowError(this.elementsToSort, 'object');
        if (criteria == 'age') {
            return this.elementsToSort.sort((a,b) => b[criteria] -a[criteria]);
        }
        return this.elementsToSort.sort((a,b) => b[criteria].localeCompare(a[criteria]));
    }

    checkTypeAndThrowError(iterable , validType) {
        for (const el of iterable) {
            if (typeof el !== validType) {
                throw new Error(`You must give ${validType} input!!!`);
            }
        }

        return true;
    }
}





const sorter = new Sorting([9,2,7,5,6]);
console.log(sorter.sortNumbersAscendingOrder());
console.log(sorter.sortNumbersDescendingOrder());

const stringSorter = new Sorting(['g','a','z','b']);
console.log(stringSorter.sortStringsAscendingOrder());
console.log(stringSorter.sortStringsDescendingOrder());

const objectSorter = new Sorting([
    {'name': 'Ivan', 'age' : 15, 'job': 'programmer'},
    {'name': 'Pesho', 'age' : 20, 'job': 'manager'},
    {'name': 'Chochi', 'age' : 19, 'job': 'McDonaldsdjiq'},
    {'name' : 'Aleks', 'age' :50, 'job': 'ingeniur'},
]);

console.log(objectSorter.sortObjectsByCriteriaAscendingOrder('name'));
console.log(objectSorter.sortObjectsByCriteriaAscendingOrder('age'));

console.log(objectSorter.sortObjectsByCriteriaDescendingOrder('age'));