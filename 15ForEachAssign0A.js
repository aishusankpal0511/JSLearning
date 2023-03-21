const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("=========Step1(log the array element with its index)======================");
arrayNumbers.forEach((element,index) => {
    console.log(`Index:${index}   Element:${element}`)
});
console.log("========step2(find positive number)=============");
arrayNumbers.forEach((element) => {
    if (element>=0) {
        console.log(element);
    }

});
console.log("===========step3(find negative number)===============");
let stores =[]
arrayNumbers.forEach((element) => {
    if (element<0) {
        // console.log(element);
        stores.push(element)
    }
});
console.log(stores);
console.log("============Step4(Even numbers)=================");
arrayNumbers.forEach((element) => {
  if (element%2==0) {
    console.log(element);
  }    
});
console.log("============step5(Sum of all element)===========");
let sum=0;
arrayNumbers.forEach((element) => {
    sum= sum +element;
});
console.log(sum);
console.log("============step6(only even indexed array value)==========");
let store =[]
arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        // console.log(element);
        store.push(element)
    }
});
console.log(store);