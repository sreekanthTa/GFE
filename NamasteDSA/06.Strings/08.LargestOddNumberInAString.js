/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let largeOdd = null

    for(let i = num.length-1 ; i>=0; i--){
        const val = num[i]
        if(val%2 != 0){
          largeOdd = i
          break;
         } 
    }


    return largeOdd!=null ? String(num.substr(0,largeOdd+1)) : ""
};

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.