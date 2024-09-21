// my code

var map = function(arr, fn) {
    let returnedArray = []
    for(i=0;i<arr.length;i++){
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
};

