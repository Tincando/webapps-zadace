
function obrni(x){
    var arr = []

    for (i in x){
        arr.unshift(x[i])
    }

    return arr
}

console.log(obrni([3,4,5,6]))

