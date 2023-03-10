class Bank{
      constructor(name,location,account,ifsc,interestRate){
this.bankName = name;
this.location = location;
this.account = account;
this.ifsc = ifsc;
this.interestRate=interestRate;
    }
}
const sbiBank = new Bank("SBI Bank","Narhe","62547895546","SBIN00004598",10.75);
console.log(sbiBank);

const axisBank = new Bank("Axis Bank","wakad","895456211","AXIS789456", "10");
console.log(axisBank);

