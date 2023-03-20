var num1 = 10;
var num2 = 2;
var result = num1 + num2; // Addition
console.log(` Addition is ${result}`);

result = num1 - num2;
console.log(`Subtraction is  ${result}`);

result = num1 * num2;
console.log(`Multiplication is  ${result}`);

 result = num1 ** num2;
 console.log(`Exponential is  ${result}`);

 result = num1 / 3;
 console.log(`Division is  ${result}`);

 result = num1 % 3;
 console.log(`Reminder is  ${result}`);

 var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);

 console.log('caparison operators');
 var num3 = 10;
 console.log(num3==10);

 console.log(`Caparison operators `);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4);

 console.log(num3 != num4); 
 console.log(20 < 10); // > less than

 console.log(10 < 10); // > less than

 var marks = 35;

 console.log(marks > 35); // > Greater than

 var marks = 35;
 console.log(marks >= 35); // > Greater than equal

 var marks = 70;
 var result = marks >=60 ? "Allow him for interview" :"Dont allow"; 
 console.log(result);

 var age = 20;
 var res = age >= 21 ? true : false;
 console.log(res);

console.log("Even or OOD");
 var myNumber = 7;
 // Even - Divide by 2 and reminder is 0
 var result = myNumber%2 == 0 ? "EVEN" : "OOD";
 console.log(result);

 function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);


















 
