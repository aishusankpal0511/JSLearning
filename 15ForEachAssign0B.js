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
console.log("=======Step1(find out TCS employee log only names and company)===============");
arrayEmployee.forEach(employee => {
    let empCompany = employee.empCompany;
    if (employee.empCompany=="TCS") {
        console.log(`Employee Name:${employee.empName} Employee company:${employee.empCompany}`);
    }
});
console.log("========Step2(find employee with salary greater than or equal 50000)===========");
arrayEmployee.forEach(employee => {
    let empSalary =employee.empSalary
    if (employee.empSalary>=50000) {
        console.log(`Employee salary:${employee.empSalary}  Employee Company: ${employee.empCompany}  Employee Name:${employee.empName}  Employee Department:${employee.empDept}  Employee ID:${employee.empId}`);
    }
});
console.log("============Step3(sum of all employee salary)====================");
let sum =0;
arrayEmployee.forEach(employee => {
    let totalSalaryOfemployee = employee.empSalary
    employee.empSalary=="empSalary" 
        sum = sum + totalSalaryOfemployee
    
});
console.log(`Total salary of employee:${sum}`);
console.log("===============Step4(Average salary)======================");
let length = arrayEmployee.length
// console.log(length);
arrayEmployee.forEach((employee,index,array) => {
 console.log(`Average Salary : ${sum/length}`);
});
console.log("============step5(IT or HR department employee salary is greater than equal to 75000)========");
arrayEmployee.forEach(employee => {
    let empDept =employee.empDept
    if (employee.empSalary>=75000 && (employee.empDept=="IT" || employee.empDept=="HR")) {
        console.log(`Employee Salary: ${employee.empSalary} Employee Name: ${employee.empName} Employee ID: ${employee.empId} Employee Company: ${employee.empCompany} Employee dept:${employee.empDept}`);
    }
});