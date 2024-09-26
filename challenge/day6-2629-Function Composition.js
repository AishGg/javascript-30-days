//  my code

// Tip for this problem is we have a array of functions and we are solving very single functions and returning a single function
// starting with the last array and passing the value to the next last array and continue it until it ends

var compose = function(functions) {
    if (functions.length === 0){
        return function(x) { return x}
    }else{
    return function(x){
        let lastFunctionResult = functions[functions.length - 1](x)
        for(i=functions.length - 2; i>=0; i--){
            lastFunctionResult = functions[i](lastFunctionResult);
        }
        return lastFunctionResult;
    }
}
}
