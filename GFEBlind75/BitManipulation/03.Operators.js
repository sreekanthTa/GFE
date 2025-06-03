//AND 
//      ALL TRUE => TRUE
//       1 FALSE => FALSE

// OR
//     ALL FALSE => FALSE
//      1  TRUE  => TRUE




// XOR
// no of 1's even => 0
// no of 1's odd => 1


//SHIFT
// RIGHT SHIFT:
  
//    IF  13 has 100111

//    13 >> 3 => 100 ( last  111 will be removed) =>

    //   RESULT: It's value can be find by (13 / Math.pow(2, 3))

    // if n is negative => 
    //      1) 1s compliement => flip binary
    //      2) 2s compliement => add 1 at the end 

// lEFT SHIFT:
//   it also cuts the first number from left 
    //  13<<1

    // formula: 13 * Math.pow(2,1) => 26


// NOT OPERATOR:

//  X = ~5

//  1. flip  like (~ opearator)
//  2. Check if it is negative saves 2's compliement(add 1) or else stop

// Note :  if it has start 1 it is negative or if it has 0 is  +ve /