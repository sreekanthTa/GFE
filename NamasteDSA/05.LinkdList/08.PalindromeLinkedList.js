var isPalindrome = function (head) {
  
    let slow = head
    let fast = head
    const arr = []
  
  
  
    while(fast && fast.next){
      arr.push(slow.val)
      slow = slow.next
      fast = fast.next.next
    }
  
    if(fast){
      slow = slow.next
    }
  
    let mid = slow
  
    while(mid){
      const val = arr.pop()
  
      if(val != mid.val){
          return false
      }
      mid = mid.next
    }
  
    return true
  };
  