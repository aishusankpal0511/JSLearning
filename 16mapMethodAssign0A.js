const arryNumbers = [20,11,40,25,23,11,9,31,60,2,19]
console.log("==============Step1(Add 10 each element log new array)==================");
const arrayNew = arryNumbers.map((element) => {
      return element+ 10;
})
console.log(arrayNew);
console.log("============Step2(Square of each element)===================");

const arrayNum = arryNumbers.map( (element) =>{

    return element**2
})
console.log(arrayNum);
console.log("==============Add the index value into each coressponding array element====================");
 const arrayNews= arryNumbers.map((element,index) =>{
    return element+ index
})
console.log(arrayNews);




 