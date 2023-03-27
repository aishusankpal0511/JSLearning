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
console.log("===========Step1(all employee wipro company)===================");
var empCompany = arrayEmployee.filter((employee)=>{
    return employee.empCompany == "Wipro";
   
   })
   empCompany.forEach((employee) => {
     console.log(`Employee Name:${employee.empName} Employee Company:${employee.empCompany}`);
   });
   console.log("==========Step2(all employee from IT OR HR)===========");
      const empDepatment = arrayEmployee.filter((employee)=>{
        return employee.empDept == "IT"  || employee.empDept == "HR"
      })
      empDepatment.forEach((employee)=>{
         console.log(` Employee Name:${employee.empName}   Employee Department: ${employee.empDept}`);
      })

    console.log("==========Step3(employee whose emp[ ids are greater than 50)==========");
     const empIds =  arrayEmployee.filter((employee)=>{
             return employee.empId>=50
    })
    empIds.forEach((employee)=>{
             console.log(`Employee Name: ${employee.empName}  Employee ID:${employee.empId}`);
    })
    console.log("=========Step4(start letter A V & M)==================");
     const startLeter = arrayEmployee.filter((employee)=>{
               return employee.empName
     })
     startLeter.forEach((employee)=>{
        let empName = employee.empName
        if (empName.startsWith("R") || empName.startsWith("V")  || empName.startsWith("M")) {
            console.log(`Employee Name: ${employee.empName}`);
        }
     })
     console.log("================Step5(Average salary of all department)==============");
     const averagesalarydept = arrayEmployee.filter((employee)=>{
            return employee.empSalary
     })
     let totalSalary= 0
     averagesalarydept.forEach((employee)=>{
         totalSalary = totalSalary + employee.empSalary
     })
     const avgSalary = totalSalary / averagesalarydept.length
     console.log(avgSalary);
     console.log("============Step6(average salary for IT department)============");
     const salary = arrayEmployee.filter((employee)=>{
         return employee.empSalary
     })
     salary.forEach((employee)=>{

     })





    