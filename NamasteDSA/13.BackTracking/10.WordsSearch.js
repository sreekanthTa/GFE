/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    const rows = board.length
    const cols = board[0].length


    const track = (i , j, index ) =>{

        if(index == word.length ) return true
        
        if(i<0 || j<0 || i>=rows || j>=cols) return false

        if(board[i][j] != word[index]) return false
      
       // mark visited
        const temp = board[i][j];
        board[i][j] = '#';

        let found = track(i+1, j, index+1) || 
                    track(i-1, j, index+1) || 
                    track(i, j+1, index+1) || 
                    track(i, j-1, index+1)
        board[i][j] = temp
         
        return found

    }
        

       for(let i = 0 ; i < rows;i++){
          for(let j=0; j < cols; j++){
                  
              if (track(i, j, 0)) return true;   // ✅ only return if found
                     
          }
       }
    
    return false
};

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
