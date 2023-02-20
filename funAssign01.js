console.log("*******step1*******");
// function with no aruguments and no return value
function showFullName(){
    console.log("My Full Name is:Aishwarya sankpal")
}
showFullName(); //function call or invoke
// function with no aruguments and no return value
function languageName(){
    console.log("My Favourite language is:Java Script")
}
languageName();//function call or invoke
console.log("********step2********");
//function with arguments and no return value
function PersonalDetails(firstName,lastName, collegeName){
    console.log("firstName:",firstName );
    console.log("lastName:",lastName);
    console.log("collegeName:",collegeName)
     }
     PersonalDetails("Aishwarya" , "Sankpal", "Nmce");

     console.log("*******step3********");
     // swapping program
     function swapValuesDude(value1, value2){ // value1 = num1,  value2 = num2
        console.log("Before Swap:", value1, value2);
        var temp = value1;
        value1=value2;
        value2 = temp;
        console.log("After Swap:", value1, value2);
        }
        swapValuesDude("Virat", "Anushka");
        swapValuesDude(1000,2000);
        console.log("******step4*******");
        function sumOfNumbers(num1, num2, num3){
            var sum = num1 + num2 + num3;
            return sum;
             }
             var sumResult = sumOfNumbers(10.23, 600, 40);
             console.log(sumResult);
             var sumResult = sumOfNumbers('Hello','Good','Morning');
             console.log(sumResult);
                 
     
     
     
     