console.log("*********step1************")
function squareOfWordLength(name1){
    console.log(`${name1}`);

    var nameLength = name1.length;
    console.log(`length is ${nameLength}`);

    var squareOfLength = nameLength**2;
    return squareOfLength;
}
    var result = squareOfWordLength("javaScript"); //function call or invoke
    console.log(`Square of javascript is ${result}`);
    var result = squareOfWordLength("Google chrome");
    console.log(`square of Google chrome is ${result}`);
    var result = squareOfWordLength("Developer Smart");
    console.log(`square of Developer Smart is ${result}`);
    console.log("********************step2*************************")
    //function with no arguments and no return value
    function showFullName(){
          var str = "I am Angular Developer";
          console.log(`${str}`);

          var nameLength = str.length;
          console.log(`length is ${nameLength}`);

          var str = str.split(" ");
         console.log(`${str.length}`);

         var division = nameLength/str.length;
         console.log(`string length divide by total word is ${division}`);

         var multiple = nameLength*str.length;
         console.log(`string length multiple by total word is ${multiple}`);

    }
    showFullName(); //function call or invoke


       