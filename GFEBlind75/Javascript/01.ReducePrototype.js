Array.prototype.testReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};


const result = [1,1,1,1,1].testReduce((acc, curr)=>acc+curr, 0)
console.log("Result is", result)