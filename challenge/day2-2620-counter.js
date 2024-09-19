// my code

function createCounter(n){
    return function(){
        return n++;
    }
}
const counter = createCounter(10);
counter()
counter()
counter()

// Tips

// Simple doubt that most of the beginners can face that when we are calling the function first time why 
// is it returning the same value that we passed instead of next

// for example calling the counter(10) = return the 10

// In this problem there is a concept called post-increment is used which means retunr the value first and then increment it
// counter(10) = return 10 and increase the n = 11

// opposite to it ++n means pre increament first increase the value then return it
// counter(10) = increase the n and return it n =11

// another tip 

// n++, ++n are same but n = n+1 does not return anything it is just increment the value

// post and pre increment concept only apply for similar n++ expressions