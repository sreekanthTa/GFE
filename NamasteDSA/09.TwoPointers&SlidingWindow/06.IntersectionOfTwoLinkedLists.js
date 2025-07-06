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
    
    let l1Length = 0
    let l2Length = 0

    let copyA = a
    let copyB = b

    while(copyA){
        l1Length +=1
        copyA = copyA.next
    }

    while(copyB){
        l2Length +=1
        copyB = copyB.next
    }

     copyA = a
     copyB = b

    while(l1Length > l2Length){
        copyA = copyA.next
        l1Length -=1
    }

    while(l1Length < l2Length){
        copyB = copyB.next
        l2Length -=1
    }

    while(copyA&&copyB){
        
        if(copyA == copyB){
            return copyA
        }

         copyA = copyA.next
         copyB = copyB.next
    }
    
    return null

   
};

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
