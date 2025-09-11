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
var swapPairs = function(head) {

    let dummy = new ListNode(0)
    dummy.next = head
    let current = dummy
    
    while(current.next&&current.next.next){
        let first = current.next
        let second = current.next.next

        first.next = second.next
        second.next = first

        current.next = second
        current = first
    }
    return dummy.next
};


// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]