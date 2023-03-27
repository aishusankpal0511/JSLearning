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
console.log("============Step1(sort the arrayEmployee asending order)==========");
 const arrayEmpId =arrayEmployee.filter((element)=>{
        return element.empId;
});
arrayEmpId.forEach((element) => {
  console.log(`Employee ID: ${element.empId}  Employee Name:${element.empName}  Employee Department:${element.empDept}`);
});
console.log("================Step2(sort the arrayEmployee asending order)===============");
const arrayDept = arrayEmployee.filter((element)=>{
    return element.empDept
});
 const arraySortDept = arrayDept.sort((a,b)=>{
  return a.empDept>b.empDept ? 1 :-1
});
arraySortDept.forEach((element)=>{
  console.log(`Employee ID :${element.empId}  Employee Dept:${element.empDept}   Employee Company:${element.empCompany}`);
})
 console.log("===============step3(sort the arrayEmployee desending order)===================");
const arraySalary = arrayEmployee.filter((element)=>{
  return element.empSalary
});
const arraySortSalary = arraySalary.sort((a,b)=>{
  return a.empSalary > b.empSalary  ? -1 : 1;
});
arraySortSalary.forEach((element)=>{
  console.log(`Employee Name: ${element.empName}  Employee Salary:${element.empSalary}  Employee Company:${element.empCompany}`);

})
