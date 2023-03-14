console.log("=============step1=======================");
const bankSbi = {
     bankName:"state Bank of India",
      location: "Aurgabad",
      accountNumber:78945632145698,
      ifsc : "SBIN0001716",
}
console.log(`Bank Name:${bankSbi.bankName}, location:${bankSbi.location}, Account Number:${bankSbi.accountNumber}, IFSC:${bankSbi.ifsc}`);
console.log("==================step2======================");
const bankLocation = {
    street:"Aurgabad road",
    city:"Aurgabad",
    pinCode:"431001"

}
console.log(`Street:${bankLocation.street}, City:${bankLocation.city}, PIN CODE:${bankLocation.pinCode}`);
console.log("====================step3(object assign & spread operator)======================");
const mergedObject = Object.assign({},bankSbi,bankLocation);
console.log(mergedObject);

const result = {...bankSbi,...bankLocation};//deep clone
console.table(result);

console.log("====================step4=====================");
const rateOFInterest ={
    homeLoanInterest:"12%",
    personalLoanInterest:"11%",
    dueInterest:"13%"
}
console.log(`home loan :${rateOFInterest.homeLoanInterest},personal loan:${rateOFInterest.personalLoanInterest},due interest:${rateOFInterest.dueInterest}`);
console.log("===================step5======================");
const sbiDetails = {...bankSbi,...bankLocation,...rateOFInterest}
console.table(sbiDetails);
console.log("======================step6==================");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(key,element);
    }
}
