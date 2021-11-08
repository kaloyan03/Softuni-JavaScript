class Textbox {
    constructor(selector, invalidSymbolsRegex) {
        this._invalidSymbolsRegex = invalidSymbolsRegex;
        this._elements = document.querySelectorAll(selector) 
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this.elements[0];
    }

    set value(val) {
        Array.from(this._elements).forEach(el => {
            el.value = val;
        })
    }

    isValid() {
        return this._invalidSymbolsRegex.test(this.elements[0].value)
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
