// Input: list = [1,2,3], pos = 0
// Output: true
// Explanation: The linked list is constructed from the array [1, 2, 3] with the pos = 0, which means the last node (value 3) connects back to the 0th node (value 1). The structure of the linked list is: 1 -> 2 -> 3 -> (back to 1). This forms a cycle starting from node 1. Hence, the output is true.
// Input: list = [1], pos = -1
// Output: false
// Explanation: The linked list has only one node with the value 1. The pos = -1 indicates that the last node does not connect to any other node. The structure of the linked list is: 1 -> null. Since the list terminates with null and does not loop back to any earlier node, it does not contain a cycle. Hence, the output is false.

export default function linkedListDetectCycle(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true;
      }
    }
  
    return false;
  }
  