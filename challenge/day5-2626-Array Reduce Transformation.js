
 // my code 

 var reduce = function(nums, fn, init) {
    let res = init;
    for(i=0;i<nums.length;i++){
        res = fn(res, nums[i])
    }
    return res
};