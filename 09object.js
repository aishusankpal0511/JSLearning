// object literals
// prashant Deshmukh
let firstName = "prashant";
let lastName = "Deshmukh";
let isWorking = true;
let age = 22;
let collegeName = "ABC";
let id = 12345;

let student = {
    firstName:"prashant",
    lastName : "Deshmukh",
    isWorking : true,
    age : 22,
    collegeName : "ABC",
    id : 12345,
    address: {
        street: "wakad",
        city: "pune",
        PIN : "431204"
},
school : "podar school",
friends :["Bill","Aish","Elon"] ,
show: function(){
    console.log("I am show() function");
},
addressDetails:function(){
    this.address
    return `Address is:Street ${this.address.street}, city ${this.address.city},PIN${this.address.PIN}`
}
};
let resultAddress = student.addressDetails();
console.log(resultAddress);
student.show(); //Invoke a function
console.log(student.friends);
console.log(student.friends[student.friends.length-1]);

student.school = "ABC";
//431205
student.address.PIN = 431205;
console.log(student.address);
console.log(student.address.city);
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
};
console.log(student.marks);



console.log(student);
console.log(typeof student);
//. Dot Notation
console.log(student.firstName);
//[] Notation
console.log(student["lastName"]);
//Update property
let collegeeName = "ABC";//COEP pune
collegeName = "COEP pune";
 
console.log(student.age);

//Add new property city = "Mumbai"
student.city = "Mumbai";
console.log(student);
student.country = "India";
console.log(student);

//delete property
delete student.isWorking;
console.log(student);

//Empty object
//firstName ="Mohit"
let teacher={};
 teacher.firstName="Mohit";
 console.log(teacher);

 const array = [];
 array[0] = 12;
 console.log(array);