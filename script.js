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

function calculateAmort(){
    let principal = parseInt(getPrincipal());

    let amort = (principal/1000)*calculate();
    let mri = (principal/1000)* 0.76;
   
    let monthlyamortization = (amort + mri).toFixed(2);
    
    document.getElementById("amortanswer").innerHTML = "Computed amortization is: " + amort + " and MRI is: " + mri
    document.getElementById("monthlyamortization").innerHTML = "Total Monthly Amortization = " + monthlyamortization
    return monthlyamortization
}

function getPrincipal(){
    const x = document.getElementById("principal").value;
    return x
}
