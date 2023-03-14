console.log("=======================step1=============================");
class Vechicle{
    constructor(name,color,price,company,fuelType){
        this.name =name;
        this.color =color;
        this.price =price;
        this.company= company;
        this.fuelType =fuelType
    }
}
const swiftDesireVechicle = new Vechicle("Swift Desire","White","850000","Maruti suzuki","petrol");
console.log(swiftDesireVechicle);
const brezaVechicle = new Vechicle("Breza","blue","1500000","Maruti suziki","diesel");
console.log(brezaVechicle);
const scorpioVechicle = new Vechicle("Scorpio","White","1700000","Mahindra","diesel");
console.log(scorpioVechicle);
const hondacityVechicle = new Vechicle("Hondacity","White","1500000","Honda","diesel");
console.log(hondacityVechicle);
const balenoVechicle = new Vechicle("Baleno","White","900000","Maruti suziki","diesel");
console.log(balenoVechicle );
console.log("================Add to the Array and Traverse using for of====================");
const arrayOfVechicle = [swiftDesireVechicle,brezaVechicle,scorpioVechicle,hondacityVechicle,balenoVechicle];
for (let index = 0; index < arrayOfVechicle.length; index++) {
    const element = arrayOfVechicle[index];
    console.log(`[${element.name},${element.color},${element.price},${element.company},${element.fuelType}]`);
}
console.log("========================step2==========================");
class College{
    constructor(name,university,address,id){
        this.name =name;
         this.university =university;
        this.address= address;
        this.id = id;
        
    }
}
const collegeNmce = new College("NMCE","shivaji university","peth Naka islampur ","2425",);
console.log(collegeNmce);
const collegeCwit = new College("CWIT","Autonoms","pune","4558",);
console.log(collegeCwit);
const collegeAitp = new College("AITP","MSBIT","vita ","5256",);
console.log(collegeAitp);
const collegeTca = new College("TCA","pune university","kondhwa pune ","6541",)
console.log(collegeTca);
console.log("===================step3=========================================");
function traverseObject(collegeName){
      for (const key in collegeName) {
    if (Object.hasOwnProperty.call(collegeName, key)) {
        const element = collegeName[key];
        console.log(key,element);

    }
 }
}
console.log("*****************NMCE College Details*****************************");
traverseObject(collegeNmce);
console.log("*****************CWIT College Details*****************************");
traverseObject(collegeCwit);
console.log("*****************AITP College Details*****************************");
traverseObject(collegeAitp);
console.log("*****************TCA College Details*****************************");
traverseObject(collegeTca);

// console.log("=======================step4=========================");
// function isPrime(n){
//  if (n<2) 
//     return `${n} is not prime`
//     for (let index = 2; index < n; index++) {
//         if (n % index===0) {
//             return`${n} is not a prime number` 
//         }
//         return`${n} is a prime number`  
//         }
//      }

// console.log(isPrime(11));