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
console.log("===========Step1(find out all employee in TCS)=================");
 var empCompany = arrayEmployee.filter((employee)=>{
   return employee.empCompany == "TCS";
  
  })
  empCompany.forEach((employee) => {
    console.log(`Employee Name:${employee.empName}  Employee Company:${employee.empCompany}`);
  });
   console.log("==============Step2(average salary of wipro)===============");
   const wiproEmp = arrayEmployee.filter((employee) =>{
    return employee.empCompany == "Wipro";
    });
       let totalSalary = 0;
      wiproEmp.forEach((employee) =>{
    totalSalary = totalSalary+employee.empSalary
     });
   // console.log(totalSalary);
const avgSalary = totalSalary / wiproEmp.length
console.log(avgSalary);
console.log("===============Step3(average salary of wipro and Infy)========");
 const infyEmp = arrayEmployee.filter((employee)=>{
     return employee.empCompany =="Infy" || employee.empCompany =="Wipro"
});
let averageSalary = 0;
infyEmp.forEach((employee)=>{
averageSalary = averageSalary + employee.empSalary
});
console.log(`${averageSalary/infyEmp.length}`);

