function person(callBack){
   console.log("aish");
   callBack();
   return function(){
    console.log("komal");
   }
}
function bank(){
  console.log("advait");
}
let result = person(bank)
result()
