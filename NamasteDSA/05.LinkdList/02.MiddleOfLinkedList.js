/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
 
    let slow = head
   
    let fast = head
   
    while(fast&&fast.next){
       slow = slow.next
       fast = fast.next.next
    }
   
    return slow;
   };


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

const head = [1, 2, 3, 4, 5]

console.log("Middle of the linkedlist", middleNode(head))