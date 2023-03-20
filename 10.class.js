class Bank{
      constructor(name,location,account,ifsc,interestRate){
this.bankName = name;
this.location = location;
this.account = account;
this.ifsc = ifsc;
this.interestRate=interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate}`);
    }
}
const sbiBank = new Bank("SBI Bank","Narhe","62547895546","SBIN00004598",10.75);
sbiBank.showDetails();

const axisBank = new Bank("Axis Bank","wakad","895456211","AXIS789456", "10");
axisBank.showDetails();
function traverseOject(bankObject){
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject, key)) {
            const element = bankObject[key];
            console.log(`Object key value is: ${key} ${element}`);
            
        }
    }

}
traverseOject(sbiBank)


class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);