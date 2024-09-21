// Tips for this problem

// first the outer function returns a object
// Another inner function should be written as object 
// like {true: "value"}

// that means if function name should be key and funciton itself is value


const expect = function (val) {
    const value = val;
    return {

        toBe: function (val2) {
            if (val2 !== value) {
                throw new Error("Not Equal")
            } else return true
        },
        notToBe: function (val2) {
            if (val2 === value) {
                throw new Error("Equal")

            } else return true
            }
        }
    }

