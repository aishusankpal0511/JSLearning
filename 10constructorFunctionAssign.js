function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Name :${this.bankName}, location: ${this.location},ifsc code: ${this.ifscCode},Branch Code: ${branchCode}`);
    
    }
}

const yesBank = new Bank("YES Bank" , "Aurgabad", "YESB0000029" ,"YES0116");
yesBank.show()
const sbiBank = new Bank("state Bank of India","Aurgabad","SBIN0001716","SBI0106");
sbiBank.show()
const mahaBank = new Bank("Maharashtra Bank","Aurgabad","MAHA0000186","MAHA0186");
mahaBank.show()
const axisBank = new Bank("Axis Bank","Aurgabad","UTIB0000165","UTI3394");
axisBank.show()
console.log("==============After Adding data member using prototype==================");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`SBI OPEN TIME IS :${sbiBank.openTime}, SBI CLOSE TIME IS: ${sbiBank.closeTime}`);
console.log(`BANK NAME IS: ${axisBank.bankName}, AXIS BANK CLOSE TIME IS :${axisBank.closeTime}`);
console.log(`BANK NAME IS:${yesBank.bankName},  YES BANK OPEN TIME IS :${yesBank.openTime}, YES BANK BRANCH CODE IS :${yesBank.branchCode}`);
