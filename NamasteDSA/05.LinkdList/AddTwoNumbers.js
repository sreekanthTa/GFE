/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0)
    let newNoe = head

    let carry =0

    while(l1!=null || l2!=null){
       let sum = 0

       sum+= carry

       if(l1?.val  !=null){
       sum+=l1.val 
       l1 = l1?.next
       }

       if(l2?.val != null){
       sum+=l2.val 
       l2 = l2?.next
       }
     
    

        carry = Math.floor(sum / 10);
        newNoe.next = new ListNode(sum % 10);
        newNoe = newNoe.next;

 

    }

    if(carry>0) newNoe.next= new ListNode(carry)

    return head.next
};


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.