/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {
  
    if (value ==null) return 'null'
    if (typeof value == 'boolean' || typeof value=='number') return String(value)
    if (typeof value == 'string') return `"${value}"`
  
    if(Array.isArray(value)){
      const items = value.map((e)=>jsonStringify(e))
      return `[${items.join(',')}]`; // wrap in square brackets
    }
  
    if(typeof value == 'object') {
      const pairs=  Object.entries(value).map(([key,value])=>{
        return    `${jsonStringify(key)}:${jsonStringify(value)}`
      })
      return `{${pairs.join(',')}}`;
    }
  
    return ''
  }