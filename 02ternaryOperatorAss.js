console.log("<<<<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<<<<<<<")
function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are Not eligible for marriage` ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");//function invoke
  console.log(`${result}`); 
  var result = maleMarriageEligibility("Male", 17, "Stew Jobs");//function invoke
  console.log(`${result}`);
console.log("<<<<<<<<<<<<<<<<<<Step2<<<<<<<<<<<<<<<<<<<<<<");
function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are Not eligible for marriage` ;
    return result;
 }
  var result = femaleMarriageEligibility("female", 16, "Jenifer");//function invoke
  console.log(`${result}`); 
  var result = femaleMarriageEligibility("female", 27, "Malinda Gates");//function invoke
  console.log(`${result}`);