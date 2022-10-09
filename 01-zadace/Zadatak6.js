
function mnozi7(x){
    var rez=1;

    if(x > 0 && x < 1000 ){
    for(let i= 1; i< x; i++){
        if(i % 7 == 0){
            rez *= i;
        }
        
    }
    }else{
        return 0;
    }

    return rez;

}

console.log(mnozi7(23))