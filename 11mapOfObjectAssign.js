console.log("================object created using class=====================");
class Bank {
    constructor(bankName,location,accountNumber,ifsc,interestRate){
    this.bankName = bankName;
    this.location = location;
    this.accountNumber = accountNumber;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
    }
}
const axisBank = new Bank("Axis Bank","Aurgabad","4125637894","UTIB0000165" ,10.74);
const sbiBank = new Bank("State Bank of India","Aurgabad","7125637894","SBIN0001716" ,10.85);
const iciciBank = new Bank("ICICI Bank","Aurgabad","9125637894","ICIC0006970" ,11.85);
const kotakBank = new Bank("kotak Bank","Aurgabad","5125637894","kkbk0000693" ,10.85);
const hdfcBank = new Bank("HDFC Bank","Aurgabad","4125637895","HDFC0000740" ,11.25);
const panjabBank = new Bank("panjab Bank","Aurgabad","1125637894","PUNB0050200" ,10);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log("====================Map:Key is accountNo and values is object====================");
const mapOfBank = new Map();
mapOfBank.set( axisBank.accountNumber,axisBank);
mapOfBank.set( sbiBank.accountNumber,sbiBank);
mapOfBank.set( iciciBank.accountNumber,iciciBank);
mapOfBank.set( kotakBank.accountNumber,kotakBank);
mapOfBank.set( hdfcBank.accountNumber,hdfcBank);
mapOfBank.set(panjabBank.accountNumber, panjabBank);
console.log(mapOfBank);
console.log("==================Traversing Map=======================================");
const keyOfMap = mapOfBank.keys();

for (const key  of  keyOfMap ) {
    const element = mapOfBank. get(key)
    console.log(`Bank Name:${element.bankName}, account number:${element.accountNumber}, interest rate:${element.interestRate}`)
}