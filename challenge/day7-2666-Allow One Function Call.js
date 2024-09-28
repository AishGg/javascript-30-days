// my code 

// Here we are using closure function to remember the previous state and work according to it

var once = function (fn) {

    let iscalled = false;
    let result;
    return function (...args) {
        if (!iscalled) {
            result = fn(...args)
            iscalled = true;
            return result;

        } else {
            return undefined
        }
    }
};
