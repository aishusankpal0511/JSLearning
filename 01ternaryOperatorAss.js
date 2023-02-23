console.log("<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<<<");
function greaterNumber(num1,num2){
    var result = num1 > num2 ?  `${num1}` : ` ${num2}`
        console.log(`Greater number is: ${result}`);

}
    greaterNumber(10, -10)
    greaterNumber(800, -800)
    console.log("<<<<<<<<<<<<<<Step2<<<<<<<<<<<<<<")
    function isEvenOrOddNum(num){
        var result = num % 2 == 0 ? "True" :  "False";
        return result;
    }
    var output = isEvenOrOddNum(29);
    console.log(`Is 29 Even No - ${output}`);
    var output = isEvenOrOddNum(44);
    console.log(`Is 44 Even No - ${output}`);
    var output = isEvenOrOddNum(0);
    console.log(`Is 0 Even No - ${output}`);
    var output = isEvenOrOddNum(101);
    console.log(`Is 101 Even No - ${output}`);
    console.log("<<<<<<<<<<<<<<<Step3<<<<<<<<<<<<<<<<<<<<<<<");
    function wordLength(word){
        var wordLength = word.length;
        var result = wordLength%2==0 ? "EVEN" : "ODD";
        return result;
     }
     var result = wordLength("JavaScript");
     console.log(`Word "JavaScript" has ${result} length` );
     
     var result = wordLength("developer");
     console.log(`Word "developer" has ${result} length` );

     // var result = wordLength("Google");
    console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

``    
