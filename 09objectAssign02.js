const professor = {
    name:"Vaibhav",
    department:"Mechnical",
    age : 31,
    collegeName : "NMCE",
    id:12345,
    degrees: {
     engineering:"CSC",
        PHD:"Adv Computing",
},
certificates :["Hacker Rank participation","Certificate in IFE Course","Certificate in Adv Programming"],
show:function(){
    this.degrees;
    return `degress certificate in:engineering ${this.degrees.engineering}, PHD ${this.degrees.PHD}` 
}
}
console.log("==========Add minimum 5 properties========================");
console.log(professor);
console.log("==========include nested object degrees========================");
console.log(professor.degrees);
console.log("==========Add one array========================");
console.log(professor.certificates);
console.log("==========concal all degress in step2========================");
let result = professor.show();
console.log(result);
console.log("==========Add new property totalExperience========================");
professor.totalExperience = "14 years"
console.log(`Total experience is : ${professor.totalExperience}`);
console.log("==========modify property========================");
professor.city = "pune"
console.log(`After modification city is :${professor.city}`);
console.log("==========complete object========================");
professor.ID = 12345;
console.log(professor);
console.log("==========Add one new certificate last element of the array certificate========================");
professor.certificates.push("oracle certificate")
console.table(professor.certificates);


