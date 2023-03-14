console.log("============step1(shallow array)=====================");
const arrayNums = [20, 3, 56, 90, 400, 49];
const newArray = arrayNums; // Shallow Clone
newArray.push(55,66);
console.log(arrayNums);
console.log(newArray);
console.log("===========step2(deep clone using spread operator)======================");
const resultArray = [...arrayNums];//deep clone
console.log(resultArray);
arrayNums.push(10,25)
console.log(arrayNums);
console.log("=============step3(concat this arry using spread operator)==============");
arrayEven= [2,30,14,8];
const concatArray = [...arrayNums,...arrayEven];//concat
console.log(`After concat: ${concatArray}`);
console.log("================step4(create employee)==============");
const employeeInfo={
    empId : 27,
    empName:"John Doe",
    salary:{
        julyMonth:"40,0000INR",
        augMonth:"50,0000INR",
        junMonth:"65,0000inr"
    },address:{
        locality:{
            colony:"OM Vrindavan Society",
            Street : "Kanch pokli, 431202",

        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
       mobiles:["+91 8600345688", "1800456732","+919096567877"]
}
console.log(employeeInfo);
console.log("============step5(log employee details)========================");
console.log(`${employeeInfo.address.locality.colony}`);
console.log(`${employeeInfo.address.locality.Street}`);
console.log(`${employeeInfo.address.city}`);
console.log(`${employeeInfo.address.state}`);
console.log(`${employeeInfo.address.country}`);
console.log("=================step6(log a mobile)==============");
console.log(employeeInfo.mobiles);
console.log("=======step6(deep copy using JSON.stringfy())=============================");
const newEmploye = JSON.parse(JSON.stringify(employeeInfo));
newEmploye.salary.julyMonth = "80,0000INR";
console.log(`employeInfo==> ${employeeInfo.salary.julyMonth}`);
console.log(`newEmploye==> ${newEmploye.salary.julyMonth}`);

const newEmployes = JSON.parse(JSON.stringify(employeeInfo));
newEmployes.address.country = "United Kigdom";
console.log(`employeInfo==>${employeeInfo.address.country}`);
console.log(`newEmploye==>${newEmployes.address.country}`);

const newEmployess = JSON.parse(JSON.stringify(employeeInfo));
newEmployess.address.country = "United Kigdom";
console.log(`employeInfo==>${employeeInfo.address.country}`);
console.log(`newEmploye==>${newEmployess.address.country}`);


