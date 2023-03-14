function isPrime(num){
    for (let index = 2; index < num; index++) { //num=7 index = 3
       if (num%index==0) {  // 7%6==0
        return false;
       }
        
    }
  return true;
}
let result = isPrime(6);
console.log(result);