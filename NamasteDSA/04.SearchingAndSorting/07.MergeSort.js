const merge = (arr1, arr2) => {
    let a = 0
    let b = 0
    const result = []
    
    while(a < arr1.length && b < arr2.length){
        if(arr1[a] <= arr2[b]){
            result.push(arr1[a])
            a++
        }else{
            result.push(arr2[b])
            b++
        }
    }
    
    while(a<arr1.length){
        result.push(arr1[a])
        a++
    }
    
    while(b<arr2.length){
        result.push(arr2[b])
        b++
    }
    
    return result
    
    
}


const mergeArray = (arr) =>{
    if(arr.length <=1 ) return arr
    
    console.log(arr)
    const mid =  Math.floor((arr.length) / 2)
    
    const left = mergeArray(arr.slice(0,mid))
    const right = mergeArray(arr.slice(mid, arr.length))
    
    return merge(left,right)
    
}

const arr = [5,5,6,1,8,5]

console.log('mergearray', mergeArray(arr))
