/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(a, b) {
    
    let lenA = 0 
    let lenB = 0

    let headA = JSON.parse(JSON.stringify(a))
    let headB = JSON.parse(JSON.stringify(b))

    while(headA){
        headA = headA.next
        lenA += 1
    }

    while(headB){
        headB = headB.next
        lenB += 1
    }
    headA = a
    headB = b
    while(lenA > lenB){
        lenA--
        headA = headA.next
    }

    while(lenA < lenB){
        lenB--
        headB = headB.next
    }

    while(headA != headB){
        headA = headA.next
        headB = headB.next
    }

    return headA


};


// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'


listA = [4,1,8,4,5]; listB = [5,6,1,8,4,5]; skipA = 2; skipB = 3

console.log("IntersectionAt", getIntersectionNode(listA, listB)) // 8
