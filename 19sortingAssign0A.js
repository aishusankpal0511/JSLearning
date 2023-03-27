const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log("=======Step1(Reverse array)==================");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log("=========Step2(sort()method without any custom sorting logic)===============");
arrayRollNumbers.sort()
console.log(arrayRollNumbers); // 
console.log("==========Step3(sort a array using asending order)=======");
 const asending = arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1:-1
})
console.log(asending);
console.log("===========Step4(find the greatest number)==========");
const greatestNum = asending [asending.length-1]
console.log(greatestNum);
console.log("===========step5(find smallest number)============");
const smallest = asending[0]
console.log(smallest);
console.log("===========step6(Remove duplicates from array)=========");
const newArray = [...new Set(asending)]
console.log(newArray);
