function debounce(fn,wait=160){
  let timer = null,context = this;

  return function(...args){
    if(timer) return
    timer = setTimeout(()=>{
      fn.call(context,...args)
      clearTimeout(timer)
      timer = null
    },wait)
  }
}
export default debounce