
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    const lastValue = this.minStack[this.minStack.length-1]
    if(val <= lastValue || this.minStack.length==0){
        this.minStack.push(val)
    }

    return val
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poppedValue = this.stack.pop()

    const lastMinStackValue = this.minStack[this.minStack.length-1]
  
    if(poppedValue == lastMinStackValue){
        this.minStack.pop()
    }

    return poppedValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */