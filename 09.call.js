/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {

    thisArg = thisArg || globalThis

    const name = Symbol()

    thisArg[name] = this 

    const result = thisArg[name](...argArray)

    delete thisArg[name]
    
    return result
};