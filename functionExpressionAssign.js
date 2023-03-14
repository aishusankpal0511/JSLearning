console.log("<<<<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<<<<<<<<<<<<");
var vowels = function (str){
    var count = 0;
    for (let index = 0; index <= str.length ; index++) {
        var char = str.charAt(index)
        if (char == "a" ||char ==  "e" ||char ==  "i"||char == "o"||char == "u" || char =="A" ||
        char == "E" || char =="I" || char =="O" || char =="U") {
            count = count + 1;
        }
        
    }
    return count;
}
var result = vowels(`JavaScript is the language of internet`);
 console.log(`Total count of vowels ${result}`);
 var result = vowels(`I am Angular Developer`);
 console.log(`Total count of vowels ${result}`);
 var result = vowels(`Hard work and commitment is the key of successr`);
 console.log(`Total count of vowels ${result}`);
console.log("<<<<<<<<<<<<<<<<<<<<<<<Step2<<<<<<<<<<<<<<<<<<");
var lastWordCharsCount = function (str){
    var count = 0;
    for (let index = str.length-1; index >=0; index--) {
        var char = str.charAt(index)
       if (char == " ") {
        break;
        
       }
       count = count + 1
    }
    return count;
    

}
 var result = lastWordCharsCount(`JavaScript is the language of internet`);
 console.log(`Total count available in last word ${result}`);
 var result = lastWordCharsCount(`I am Angular Developer`);
 console.log(`Total count available in last word ${result}`);
 var result = lastWordCharsCount(`Hard work and commitment is the key of success`);
 console.log(`Total count available in last word ${result}`);