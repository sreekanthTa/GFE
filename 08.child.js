/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
    // console.log(element, property, value)
    const result = []
    const dfs = (node) => {
  
      for(let child of node.children){
      
        const style = window.getComputedStyle(child)
  
        if(style.getPropertyValue(property) == value){
          result.push(child)
        }
  
        dfs(child)
      }
  
    }
  
    dfs(element)
  
    return result
  }