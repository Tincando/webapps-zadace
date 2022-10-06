
function pretvarac(broj){
    let sati= 0
    var min = 0

    min= broj % 60 
    sati= Math.round(broj / 60)

    console.log(broj ," = ", sati, "sata i", min,"minuta")
}

pretvarac(120)