Array.prototype.myReduce = function(callback, initialValue){


    if(!Array.isArray(this)){
        throw new TypeError("myReduce must be called on an array")
    }

    let accumulator;
    let startIndex;

    if(initialValue!=undefined){
        accumulator= initialValue
        startIndex=0
    }else{
        accumulator = this[0]
        startIndex = 1
    }

    for(let i=startIndex; i<this.length; i++){
        accumulator = callback(accumulator, this[i], i, arr)
    }

    return accumulator

}