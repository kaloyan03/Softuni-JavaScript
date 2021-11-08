class List {
    constructor() {
        this.value = [];
        this.size = this.value.length;
    }
    
    add(number) {
        this.value.push(number);
        this.value.sort(this.toCompare);
        this.updateSize();
    };

    remove(index) {
        if (this.isValidIndex(index)) {
            this.value.splice(index,1);
            this.value.sort(this.toCompare);
            this.updateSize();
        }
    };

    get(index) {
        if (this.isValidIndex(index)) {
            return this.value[index];
        }
    };

    toCompare(a,b) {
        return a - b;
    };

    updateSize() {
        this.size = this.value.length;
    }

    isValidIndex(index) {
        if (index >= 0 && index < this.value.length) {
            return true;
        }
    };

    
}


// let list = new List();
// list.add(5);
// list.add(4);
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.size);