
function curry(func){

     let context = this

    return function curried(...args){
        if(args.length >= func.length){

            return func.apply(this, ...args)

        }else{

            return function(...nextArgs){

                return curried.apply(this, [...args, ...nextArgs])

            }

        }
    }
}

const obj = {
    x: 10,
    add(a, b) {
        console.log("checkisd", this, a, b)
      return this.x + a + b;
    }
  };
  
  const curriedAdd = curry(obj.add);
  
  // Must bind to preserve `this`
//   const boundAdd = curriedAdd.bind(obj);
  
  console.log(curriedAdd(1)(2)); // 13
  