// my code

var filter = function(arr, fn) {
    let filteredArray = []
    for(i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
};
