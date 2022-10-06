
function djeljivi3(arr){

    rez = []

    for (i in arr){
        if(arr[i]%3 == 0){
            rez.push(arr[i])
        }
    }

    return rez
   
    
}

console.log("Brojevi djeljivi s 3:", djeljivi3([1,2,3,4,5,6,7,8,9,10]))