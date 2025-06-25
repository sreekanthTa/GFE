class StackUsingTwoQueue {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    // Push element onto stack
    push(val) {
      this.q1.push(val);
    }
  
    // Removes the top element and returns it
    pop() {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      const poppedElement = this.q1.shift();
      [this.q1, this.q2] = [this.q2, this.q1];
      return poppedElement;
    }
  
    // Get the top element without removing it
    top() {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      const topElement = this.q1[0];
      this.q2.push(this.q1.shift());
      [this.q1, this.q2] = [this.q2, this.q1];
      return topElement;
    }
  
    // Return whether the stack is empty
    empty() {
      return this.q1.length === 0;
    }
  }

  
  const s = new StackUsingTwoQueue();
s.push(1);
s.push(2);
console.log(s.top()); // 2
console.log(s.pop()); // 2
console.log(s.empty()); // false
