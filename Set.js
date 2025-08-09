const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate ignored
mySet.add("hello");

console.log(mySet); // Set(3) {1, 2, "hello"}
console.log(mySet.has(2)); // true
mySet.delete(1);
console.log(mySet.size); // 2
