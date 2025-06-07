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
    
    const dummyNode = new ListNode(0)
    dummyNode.next = head

    let firstNode = dummyNode
    let secondNode = dummyNode

    let counter = n

    while(counter>=0&&secondNode){
        secondNode = secondNode.next
        counter--
    }

    while(secondNode){
        firstNode = firstNode.next
        secondNode = secondNode.next
    }

    firstNode.next = firstNode.next.next
    return dummyNode?.next
};



// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

const head = [1,2,3,4,5]; n = 2