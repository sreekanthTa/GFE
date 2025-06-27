/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length
    const columns = grid[0].length
    const queue = []
    let fresher = 0;
    let minutes = 0

    for(let i = 0 ; i < rows; i++){
        for(let j=0; j < columns; j++){
            if(grid[i][j] == 2){
                queue.push([i,j])
            }else if(grid[i][j] == 1){
                fresher +=1
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while(queue.length > 0 && fresher > 0){

        const size =  queue.length

        for(let i = 0 ; i < size; i++){
            const [x, y] = queue.shift()

             for(let [dx, dy] of directions){
                const nx = x + dx
                const ny = y + dy

                if(nx >= 0 && ny >=0 && nx < rows && ny < columns&&
                   grid[nx][ny] == 1
                ){
                   grid[nx][ny] = 2
                   fresher--
                   queue.push([nx, ny])
                }
             }

        }
                minutes++;

    }
    return fresher === 0 ? minutes : -1;
};