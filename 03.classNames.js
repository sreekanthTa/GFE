
 function classNames(...args) {
    const result = [];
  
    const process = (arg) => {
  
      if(!arg) return
  
      if (typeof arg == "string") {
        result.push(arg);
      }else if (Array.isArray(arg)) {  // check Array before object since array is also an object in javascri it
        arg.forEach(process);
      } else if (typeof arg == "object") {
        for (let item in arg) {
          if (arg[item]) result.push(item);
        }
      }else if(typeof arg =='number'){
        result.push(arg)
      } 
    };
  
    args.forEach(process)
  
    return result.join(" ");
  }
  
const result =  classNames('a', ['b', { c: true, d: false }]); // 'a b c'


console.log(result)


