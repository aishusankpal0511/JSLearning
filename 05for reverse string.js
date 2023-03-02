//index = 11 condition >=0
var reverseString = function(str){
    var reverse = ""
    for (let index = str.length-1; index >= 0; index--) {  //9
       var charAt = str.charAt(index);
       reverse = reverse + charAt; //w + 0 ==> "wo"

        
    }
    return reverse;

}
var result = reverseString("Do it anyhow");
console.log(`Reverse string is:${result}`);

var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);

// "I am Angular  champ"
var str = "I am Angular champ";
var count = 0;
for (let index = 0; index <= str.length; index++) {
    var char  = str.charAt(index);
    if (char == " ") {
        count = count + 1;
        
    }
    
    
}
console.log("Total number of spaces is :",count);