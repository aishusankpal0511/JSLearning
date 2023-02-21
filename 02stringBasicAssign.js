console.log("********step1*********");
//function with no arguments and no return value
var givenString = "     Hey you are doing good, keep it up      ";
function stringHandsOn(){
    console.log(givenString)
}
stringHandsOn(); //function call or invoke
console.log("*******step2********");
var strlength = givenString.length;
console.log(strlength);
console.log("*********step3********");
var strtrim = givenString.trim();
console.log(strtrim);
console.log("*******step4*******");
// Find the total extra spaces removed from the string - givenString
var count = givenString.length - strtrim.length;
console.log("count total number extra spaces:",count);
console.log("*******step5*********");
var charIndex = strtrim.charAt(strtrim-0);
console.log("first char is:",charIndex);
var charAtIndexLast = strtrim.charAt(strtrim.length-1);
console.log("Last char is:",charAtIndexLast);
console.log("*******step6********");
var totalWords = strtrim.split(" ");
console.log("Total Word is:",totalWords);
console.log("*******step7*********");
var indexOf =  givenString.indexOf("good");
console.log(" character available at index  is:",indexOf);
console.log("********step8*********");
// console.log("slice(),method");
var sliceResult = strtrim.slice(22);
console.log("substring starting from index 22 by using slice() is:",sliceResult);
var subStringResult = strtrim.substring(22);
console.log("substring starting from index 22 by using substring() is:",subStringResult);
console.log("********step9*******");
console.log("string ends with word up or not: ", strtrim.includes("up"));
console.log("********step10*********");
console.log("string starts with word Hey or not: ", strtrim.includes("Hey"));
console.log("********step11********");
console.log("length of string is:",strtrim.length);
