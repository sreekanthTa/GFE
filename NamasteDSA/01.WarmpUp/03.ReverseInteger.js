/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numRegex = /[0-9]/i

    let stringX = String(x)

    let pSign = true

    if (stringX[0] == '-') pSign = false

    let reverseString = ''
    for (let i = stringX.length - 1; i >= 0; i--) {

        if (numRegex.test(stringX[i])) {
            reverseString += stringX[i]
        }
    }

    const val = pSign ? reverseString * 1 : -reverseString * 1
    if (val < -(2 ** 31) || val > (2 ** 31 - 1)) {
        return 0;
    }
    return val
};

// Input: x = 123
// Output: 321

console.log("reverseAnInteger",reverse(123))