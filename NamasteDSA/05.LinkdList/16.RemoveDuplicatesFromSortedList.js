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
var deleteDuplicates = function(head) {
    if(!head?.next) return head
   let currentNode = head.next
   let previousNode = head

   while(currentNode){
         if(currentNode.val  != previousNode.val){
           previousNode.next = currentNode
           previousNode = previousNode.next
         }
         currentNode = currentNode.next
   }
   previousNode.next = null
   return head

 
};


// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]