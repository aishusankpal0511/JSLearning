console.log("<<<<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<<<<<<<<<<<<");
function checkEvenOdd(num){
    if (num%2==0) {
        return "Even";
        
    } 
    if(num%2!=0){
        return "Odd";
    }
}
var result = checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given number 70 is ${result}`);
var result = checkEvenOdd(67);
console.log(`Given number 67 is ${result}`);
var result = checkEvenOdd(98);
console.log(`Given number 98 is ${result}`);
console.log("<<<<<<<<<<<<<<<<<<<<<<Step2<<<<<<<<<<<<<<<<<<<");

function eligible(ageForVote){
if (ageForVote>=18) {
     return "Eligible For Vote";
    
} if (ageForVote<=18) {
    return "Not Eligible for Vote";
    
}

}
var result = eligible(18);
console.log(`Age 18 is ${result}`);
var result = eligible(20);
console.log(`Age 20 is ${result}`);
var result = eligible(17);
console.log(`Age 17 is ${result}`);
var result = eligible(40);
console.log(`Age 40 is ${result}`);
console.log("<<<<<<<<<<<Step3<<<<<<<<<<<<<<<<");
var num = 10;
if (num>0) {
    console.log(`String: javaScript ES6 containes more than 10 character`);
}
console.log("<<<<<<<<<<<<<<<Step4<<<<<<<<<<<<<<<<");
var givenString = "javaScript language";
var result = givenString.slice(0,4)
console.log("javaScript language is start with",result);















    







