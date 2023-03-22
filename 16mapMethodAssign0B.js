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
console.log("===============Step1(list of all employee names)===============");
const arrayNew = arrayEmployee.map((employee)=>{
    let empName = employee.empName
     return empName
})
console.log(arrayNew);
console.log("================Step2(list of depatment)============");
const arrayNews = arrayEmployee.map((employee)=>{
      let empDept = employee.empDept
      return empDept
})
console.log(arrayNews);
console.log("================step3(list of employee id)===============");
 const arrayNum= arrayEmployee.map((employee)=>{
    let empId = employee.empId
    return empId
})
console.log(arrayNum);
console.log("=================Step4(list of employee names working in TCS)===========");
 const arrayNumber = arrayEmployee.map((employee)=>{
    let empCompany= employee.empCompany
    if (employee.empCompany=="TCS") {
        console.log(`Employee Name:${employee.empName}  Employee Company:${employee.empCompany}`);
    }
})

