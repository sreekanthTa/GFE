var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
  
    if(s.length==1) return true
   
    const reg = /[a-z0-9]/i;
  
    while (left <= right) {
      while (left<=right&&!reg.test(s[left])) left++;
      while (left<=right&&!reg.test(s[right])) right--;
  
      if (left<=right&&s[left]?.toLowerCase() != s[right]?.toLowerCase()) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  };

  
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.