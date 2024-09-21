// my code

var createCounter = function(init) {
    let initialValue = init
    return {
            increment: function(){
            return ++initialValue;
        },
            decrement: function(){
            return --initialValue;
        },
            reset: function(){
            return initialValue = init
        }
    }
};