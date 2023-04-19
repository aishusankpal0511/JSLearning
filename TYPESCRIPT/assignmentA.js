var math = prompt('Enter Maths Marks ');
// console.log(`Marks in Maths : ${math}`);
var physic = prompt("Enter Physics Marks");
// console.log(`Marks in Physics : ${physic}`);
var chemi = prompt("Enter Chemistry Marks");
// console.log(`Marks in Chemistry : ${chemi}`);
var maths = +math;
var physics = +physic;
var chem = +chemi;
console.log("Marks in Maths : ".concat(maths));
console.log("Marks in Physics : ".concat(physics));
console.log("Marks in Chemistry : ".concat(chem));
var totalMarks = maths + physics + chem;
console.log("Total Marks ".concat(totalMarks));
var average = totalMarks / 3;
console.log("Average of marks: ".concat(average));
if (average > 90) {
    console.log("Grade A ");
}
if (average > 70 && average < 90) {
    console.log("Grade B");
}
if (average < 70) {
    console.log(" Grade C ");
}
