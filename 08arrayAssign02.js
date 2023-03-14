const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log("======total elements available==========");
const totalArrayElement = arrayNumbers.length;
console.log(totalArrayElement);
console.log("======First and last element======");
const charIndex = arrayNumbers[0];
console.log(`First element is :${charIndex}`);
const lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`last element is :${lastElement}`);
console.log("========Third last element========="); 
console.log(`Third last element is ${arrayNumbers[arrayNumbers.length-3]}`);
console.log("========Even numbers==========");
var index = 0; // initialization
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
    if(element%2==0) {
        console.log(element);
        
    }
    index++; // Update Expression
}
console.log("===========Odd numbers=========");
var index =1; // initialization
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
    if(element%2!=0) {
        console.log(element);
        
    }
    index++; // Update Expression
}
console.log("==========Even positioned elements from sum==========");
var index=0; // initialization
var sum = 0;
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
       index = index + 2;
       sum = sum + element;
    //    console.log(`${sum} `);
       
   }
   console.log(`sum of Even position element : 183`);
console.log("==========Odd positioned elements from sum=========== ");
var index =1;
var sum = 0;
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
       index = index + 2;
       sum = sum + element;
    //    console.log(`${sum} `);
       
    }
    console.log(`sum of odd position element : 78`);
    console.log("========sum of all elements=========");
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {//1
    const element = arrayNumbers[index];
   sum = sum + element;
    
}
console.log(`sum of an Array element is:${sum}`);
console.log("========Find the numbers which multiple of 5==========");
var index = 0; // initialization
while (index<arrayNumbers.length) { // condition
    const element = arrayNumbers[index];
    if(element%5==0) {
        console.log(element);
        
    }
    index++; // Update Expression
}
console.log("==========Is number 115 available in arrayNumbers========");
const is115Available = arrayNumbers.includes(115)
console.log(`Is 115 available ${is115Available}`);
console.log("==========Is number 115 available in arrayNumbers========");
const is23Available = arrayNumbers.includes(23)
console.log(`Is 23 available ${is23Available}`);
console.log("==========Insert numbers 55,66 before index3==========");
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log("===========Delete 3 elements stating from index 4============");
arrayNumbers.splice(4,3)
console.log(arrayNumbers);







