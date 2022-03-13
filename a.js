let a = "abcdefg"
// let b = a.slice(1)
function sort(str){
  
  return str.length>0 ? sort(str.slice(1)) + str[0] :""
}
let b = sort(a)
console.log(b)
