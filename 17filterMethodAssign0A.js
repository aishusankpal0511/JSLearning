const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19]
console.log("============Step1(all numbers which is greater than 50)================");
const arrayElement = arrayNumbers.filter( (element) => {
    return element >= 50;
} );
console.log(arrayElement);
console.log("============Step2(all even number)================");
 const array = arrayNumbers.filter((element)=>{
       return element%2==0
})
console.log(array);
console.log("============Step3(all odd number)=============");
const number = arrayNumbers.filter((element)=>{
  return element%2!=0
})
console.log(number);
console.log("===========Step4(all numbers which multiply by 5)===========");
const arrayNum = arrayNumbers.filter( (element) =>{

    return element%5==0
})
console.log(arrayNum);
console.log("================Step5(all numbers which are between 20 and 50)======");
const arrays = arrayNumbers.filter((element)=>{
  if (element>20 && element<50) {
     return element
  }
})
console.log(arrays);