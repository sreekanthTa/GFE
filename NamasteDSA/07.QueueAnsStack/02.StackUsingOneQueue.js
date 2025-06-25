class StackUsingOneQueue {
    constructor() {
      this.q = [];
    }
  
    // Push element onto stack (O(1))
    push(val) {
      this.q.push(val);
    }
  
    // Removes the top element from the stack (O(n))
    pop() {
      let i = this.q.length;
      while (i > 1) {
        this.q.push(this.q.shift()); // rotate front to back
        i--;
      }
      return this.q.shift(); // last inserted becomes front, so remove it
    }
  
    // Returns the top element without removing it (O(n))
    top() {
      let i = this.q.length;
      while (i > 1) {
        this.q.push(this.q.shift());
        i--;
      }
      const topElement = this.q[0];
      this.q.push(this.q.shift()); // restore the order
      return topElement;
    }
  
    // Returns true if the stack is empty
    empty() {
      return this.q.length === 0;
    }
  }

  
  const s = new StackUsingOneQueue();
s.push(10);
s.push(20);
console.log(s.top());    // 20
console.log(s.pop());    // 20
console.log(s.top());    // 10
console.log(s.empty());  // false
