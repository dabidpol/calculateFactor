function calculate(){
    let interest = parseInt(getInterest());
    let duration = parseInt(getDuration());

    let factor = ((( (interest/100) / 12 ) * (((Math.pow(( (interest/100) / 12 )+1,duration*12)) / (((Math.pow(( (interest/100) / 12 )+1, duration *12) -1)))))) * 1000)

    console.log(factor)
    document.getElementById("answer").innerHTML = "Computed factor is: " + factor
    return factor
}

function getInterest(){
    const x = document.getElementById("interest").value;
    return x
}

function getDuration(){
    const x = document.getElementById("duration").value;
    return x
}

