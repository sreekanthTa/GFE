/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head || k==0) return head;
    
    let length = 1 //

    let tailNode = head

    while(tailNode.next){
        length += 1
        tailNode = tailNode.next
    }
    
    tailNode.next = head

    if(k%length ==0 )return head

    k = k%length

    let currentNode = head
    
    let newCount = length - k

    while(newCount>1){
        currentNode = currentNode.next
        newCount--
    }

    const newNextNode = currentNode.next

    currentNode.next = null

    head =newNextNode

    return head



};


// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]