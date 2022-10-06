var arr = [100,150000]

var provjera= (x) => {

        if (arr.includes(x)){
            console.log( x, "je unutra [100, 150000]")
        } else{
            console.log(x, "nije unutra [100, 150000]")
        }
}

provjera(53)