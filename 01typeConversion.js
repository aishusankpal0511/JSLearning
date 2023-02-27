console.log("<<<<<<<<<<<<<string used with + gives string type<<<<<<<<<<<");
var result = '3' + 2;
console.log(result);
var result = '3' + true;
console.log(result);
var result = '3' + undefined;
console.log(result);
var result = '3' + null;
console.log(result);
console.log("<<<<<<<<<<<<<Boolen used true = 1, false = 0  <<<<<<<<<<<");
var result = 4 - true;
console.log(result);
var result = 4 + true;
console.log(result);
var result = 4 + false;
console.log(result);
console.log("<<<<<<<<<<<<<<String conversion to number<<<<<<<<<<<<<<");
var result = "4" - "2"
console.log(result);
var result = "4" - 2
console.log(result);
var result = "4" * 2
console.log(result);
var result = "4" / 2
console.log(result);
console.log("<<<<<<Undefined used with number, boolean or null given NaN<<<<<<");
var result = 4 + undefined;
console.log(result);
var result = 4 - undefined;
console.log(result);
var result = null + undefined;
console.log(result);
var result = true + undefined;
console.log(result);
console.log("<<<<<<<Convert number strings and boolean values to numbers<<<<<<<<<");
// string to number
var result = Number ("324");
console.log(result);
var result = Number ("324e - 1");
console.log(result);
// boolean to number
var result = Number (true);
console.log(result);
var result = Number (false);
console.log(result);
console.log("<<<<<<<<<<<<< Invalid string to number return NaN<<<<<<<<<<<<<<<<<<");
var result = Number ("Hello");
console.log(result);
var result = Number ("Undefined");
console.log(result);
var result = Number ("NaN");
console.log(result);
console.log("<<<<<<<<<<string to number using + operator<<<<<<<<<<<");
var numberInString = "100";
console.log(numberInString);
var myNumber = +numberInString;
console.log(typeof myNumber);
console.log("<<<<<<<<<<number to string data type conversion using toString<<<<<<<");
var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString ();
console.log(typeof afterConversion);



