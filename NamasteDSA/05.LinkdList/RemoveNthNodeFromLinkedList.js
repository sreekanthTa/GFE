/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   // We use dummynode since when n = length of linkedlist, we cannot do head = head.next
   // Since reassiging head will clear old ref a, so we need to use dummy variable to store that ref
    const dummyNode = new ListNode(0)
    dummyNode.next = head
 
    let first = dummyNode
    let second = dummyNode    
 
    let counter = n
    while(counter>=0 &&second){
     second = second.next
     counter--
    }
 
    while(second){
     first = first.next
     second = second.next
    }
 
    first.next = first.next.next
    return dummyNode.next
 
 
 
  
 };