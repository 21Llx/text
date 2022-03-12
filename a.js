function a (){
  let b = 1
  return function(){
    b += 1
    return b 
  }
}
let f = a()
console.log(f())
console.log(f())
console.log(f())
f = null
console.log(f())