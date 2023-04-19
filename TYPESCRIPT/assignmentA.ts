var math = prompt('Enter Maths Marks ')
// console.log(`Marks in Maths : ${math}`);
var physic = prompt("Enter Physics Marks")
// console.log(`Marks in Physics : ${physic}`);
var chemi = prompt("Enter Chemistry Marks")
// console.log(`Marks in Chemistry : ${chemi}`);

var maths: number = +math;
var physics: number = +physic;
var chem: number = +chemi;
console.log(`Marks in Maths : ${maths}`);
console.log(`Marks in Physics : ${physics}`);
console.log(`Marks in Chemistry : ${chem}`);

var totalMarks : number = maths+physics+chem;
console.log(`Total Marks ${totalMarks}`);

var average : number = totalMarks/3;
console.log(`Average of marks: ${average}`);

if (average > 90) {
    console.log("Grade A ");
    }
if (average > 70 && average < 90 ) {
    console.log("Grade B");
}
if (average < 70) {
    console.log(" Grade C ");
    
}