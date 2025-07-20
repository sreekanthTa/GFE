const dfs = (node) =>{
            
    if(!node) return node
    
    const leftVal =node.left.val
    const rightVal = node.right.val
    
    const total = leftVal + rightVal
    
    if(total > root.data){
        root.data = total
    }else{
        node.left.data = root.data
        node.right.data = root.data
    }
    
    dfs(node.left)
    dfs(node.right)
    
    let tot = 0
    if(node.left) tot += node.left.data
    if(node.right) tot += node.right.data
    if(node.left || node.right) node.data = tot //This makes sure that is not leaf node
    
    
}


// https://www.youtube.com/watch?v=fnmisPM6cVo&list=PLkjdNRgDmcc0Pom5erUBU4ZayeU9AyRRu&index=30&ab_channel=takeUforward