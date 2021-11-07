(function() {
    String.prototype.ensureStart = function(string) {
        if (!(this.startsWith(string))) {
            return string + this;
        }

        return String(this);
    };
    
    String.prototype.ensureEnd = function(string) {
        if (!(this.endsWith(string))) {
            return this + string;
        }

        return String(this);
    };

    String.prototype.isEmpty = function() {
        if (String(this).trim() === '') {
            return true;
        }
        
        return false;
    }

}())

let str = '  ';
console.log(str.isEmpty());
  