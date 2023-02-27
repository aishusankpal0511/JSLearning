console.log("<<<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<");
function maleMarriageEligibility (gender,age,boyname){
    if (gender=="Male"&& age>=21) {
        console.log(`Hey ${boyname} you are eligible`);
    } else {
        console.log(`Hey ${boyname} you are Not Eligible`);
        
    }

}
maleMarriageEligibility ("Male",25,"Billates");
maleMarriageEligibility ("Male",17,"Stew Jobs");
console.log("<<<<<<<<<<<<<<<<<<<<Step2<<<<<<<<<<<<<<<");
function femaleMarriageEligibility (gender,age,girlname){
    if (gender=="female"&& age>=18) {
        console.log(`Hey ${girlname} you are eligible`);
    } else {
        console.log(`Hey ${girlname} you are Not Eligible`);
        
    }

}
maleMarriageEligibility ("female",16,"Jenifer");
maleMarriageEligibility ("female",27,"Malinda Gates");
