const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("==================Step1(sum of all elements)===========");
const sum = arrayNumbers.filter( (element)=> {
    return element
 }).reduce( (runningTotal, value) => {
     return runningTotal + value;
 } );
 console.log(sum);
 console.log("==============Step2(multiply by 5 and sum )===============");
 const sums = arrayNumbers.filter( (element)=> {
    return element%5==0;
 }).reduce( (runningTotal, value) => {
     return runningTotal + value;
 } );
 console.log(sums);
 
 