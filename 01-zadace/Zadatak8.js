
function istikljuc(x,y){

   return JSON.stringify(Object.keys(x)) === JSON.stringify(Object.keys(y));

}

console.log(istikljuc({"a":1,"b":2,"c":3}, {"a":321,"b":3,"c":1}));