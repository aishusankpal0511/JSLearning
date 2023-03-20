class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
      }
    }
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
let arrayEmployee = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]
console.log("====================Step1(Employee Name and Company Name)=======================");
for (const element of arrayEmployee) {
     if (element.empCompany =="TCS") {
    console.log(`Employee Name:${element.empName}, Company Name:${element.empCompany}`);
   }
}
console.log("===============Step2(Finance department employee name and employee department)===============");
for (const element of arrayEmployee) {
    if (element.empDept =="Finance") {
        console.log(`Employee Name:${element.empName}, Employee Department:${element.empDept}`);
    }
}
console.log("==========Step3(Name starts with R)===================");
for (const element of arrayEmployee) {
    if (element.empName.startsWith("R") ) {
        console.log(`Employe Name starts with R:${element.empName}`);
        
    }
}
console.log("=========Step4(salary greater than 75000 employee Name and company and salary)==================");
for (const element of arrayEmployee) {
 if (element.empSalary>75000) {
    console.log(`Employee Name:${element.empName},Employee Company Name:${element.empCompany},Employe salary:${element.empSalary}`);
 }   
}

console.log("============Step5(greater than or equal to 50000 and from IT company)=================");
for (const element of arrayEmployee) {
    if (element.empSalary>=50000 && element.empDept=="IT") {
        console.log(`Employee Name:${element.empName},Employee ID :${element.empId},Employee company:${element.empCompany}Employee Salary:${element.empSalary},Employee department:${element.empDept}`);
        
    }
}
console.log("=============Step6(All employee in infy)======================");
for (const element of arrayEmployee) {
    if (element.empCompany=="Infy") {
        console.log(`Employe Name:${element.empName}, Employee ID:${element.empId},Employee dept:${element.empDept},Employee salary:${element.empSalary},Employee company:${element.empCompany}`);
    }
}