function debounce(func, delay) {
  let timer;
  
  return function(...args) {
    const context = this;  // capture 'this' of the caller

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args); // preserve 'this' and pass args
    }, delay);
  };
}


function searchQuery(query) {
  console.log("API call with query:", query);
}

const debouncedSearch = debounce(searchQuery,500)
// Simulating typing
debouncedSearch("h");   // cancelled
debouncedSearch("he");  // cancelled
debouncedSearch("hel"); // cancelled
debouncedSearch("hell"); // cancelled
debouncedSearch("hello"); // ✅ runs after 500ms

// const obj = {
//   name: "Sreekanth",
//   sayHi() {
//     console.log("Hi, I am", this.name);
//   }
// };

// const debouncedSayHi = debounce(obj.sayHi, 1000);

// debouncedSayHi(); 
// // ❌ Without passing `this`, "this.name" would be undefined
