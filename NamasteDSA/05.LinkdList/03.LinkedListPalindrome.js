var isPalindrome = function (head) {
    const arr = [];
  
    let slow = head;
    let fast = head;
  
    if (slow && !slow.next) return true;
  
    while (fast && fast.next) {
      arr.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
    }
  
    if (fast) {
      slow = slow.next; // for odd length
    }
  
    let mid = slow;
   
    while (mid) {
      const val = arr.pop();
  
      if (mid.val != val) {
        return false;
      }
  
      mid = mid.next;
    }
  
    return true;
  };
  
  console.log(isPalindrome([1, 2, 2, 1]));
  