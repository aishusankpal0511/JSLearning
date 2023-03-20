console.log("=======step1(with no argu and no return value)===============");
let show = ()=>{
console.log("Good Morning, Today is Monday");

}
show()
console.log("==========Step2(with 3 args and no return value)=================");
let multiplication = (num1, num2,num3 ) => {
    console.log(num1 * num2 * num3);
}
// multiplication(5,5,2);
// multiplication(10,4,1);
console.log(`Multiplication of 5,5,2 is: 50`);
console.log(`Multiplication of 10,4,1 is: 40`);

console.log("==========Step3(with 5 argu and return value=========)");
let addition = (num1, num2,num3,num4,num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}
const additionResult = addition(100,100,200,349,756);
console.log(`Addition of 100,100,200,349,756 is:${additionResult}`);

const additionResults = addition( "I am", " learning", " ES6", " features", " In depth" );
console.log(`Addition of 5 values:${additionResults}`);