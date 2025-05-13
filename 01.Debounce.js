const debounce = (func, wait) => {

    let timerId = null;

    return function (...args) {
        const context = this;
        if (timerId)  clearTimeout(timerId);
        timerId=setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
};




let searchCount = 0

const search = () =>{
    searchCount +=1
    console.log(searchCount)
}
wait = 500

const debounced = debounce(search, wait)

debounced()
debounced()
debounced()
 
 