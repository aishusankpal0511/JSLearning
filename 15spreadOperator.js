 const array = [1,2,3,5,6]
console.log(array);
console.log(...array);

const name= {
    city:"Mumbai",
    id:123
}
console.log(name);
// console.log(...name);



// ... Rest Parameter
function show(arg1, ...arg){
    console.log(arg1, arg);

}
show(3, 4, 6, 8, 9);