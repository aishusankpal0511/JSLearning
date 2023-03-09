console.log("===============SBI Bank======================");
const sbiBank = {
      bankName:"state Bank of India",
      location: "Aurgabad",
      accountNumber:78945632145698,
      ifsc : "SBIN0001716",
      interestRate:10, 
      showDetails:function(){
        console.log(`Bank Name : ${sbiBank.bankName},location:${sbiBank.location},account Number:${sbiBank.accountNumber},ifsc:${sbiBank.ifsc},interestRate:${sbiBank.interestRate}`);
      }

}
sbiBank.showDetails();//Invoke function
console.log("===============Axis Bank======================");
const axisBank = {
    bankName : "axisBank",
    location:"Aurgabad",
    accountNumber:32145698745612,
    ifsc:"UTIB0000165",
    interestRate:11,
    showDetails:function(){
        console.log(`Bank Name:${axisBank.bankName},location:${axisBank.location},Account Number:${axisBank.accountNumber},IFSC:${axisBank.ifsc},interestRate:${axisBank.interestRate}   `);
    }

}
axisBank.showDetails();
console.log("===============HDFC Bank======================");
const hdfcBank = {
    bankName : "HDFC Bank",
    location:"Aurgabad",
    accountNumber:42145698745612,
    ifsc:"HDFC0001946",
    interestRate:12,
    showDetails:function(){
        console.log(`Bank Name:${hdfcBank.bankName},location:${hdfcBank.location},Account Number:${hdfcBank.accountNumber},IFSC:${hdfcBank.ifsc},interestRate:${hdfcBank.interestRate}`);

    }

}
hdfcBank.showDetails();
console.log("===============Yes Bank======================");
const yesBank = {
    bankName : "Yes Bank",
    location:"Aurgabad",
    accountNumber:52145698745612,
    ifsc:"YESB0000029",
    interestRate:10,
    showDetails:function(){
        console.log(`Bank Name:${yesBank.bankName},location:${yesBank.location},Account Number:${yesBank.accountNumber},IFSC:${yesBank.ifsc},interestRate:${yesBank.interestRate}`);

    }

}
yesBank.showDetails();