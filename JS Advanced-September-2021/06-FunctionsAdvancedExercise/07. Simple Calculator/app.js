function calculator() {
    return {
        init: function(selector1, selector2, resultSelector) {
            num1Element = document.querySelector(selector1);
            num2Element = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        
        add : function() {
            resultElement.value = Number(num1Element.value) + Number(num2Element.value);
        },

        subtract : function() {
            resultElement.value = Number(num1Element.value) - Number(num2Element.value);
        },
    }

}

// const calculate = calculator (); 
// calculate.init ('#num1', '#num2', '#result');





