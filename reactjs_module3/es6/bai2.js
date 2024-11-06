let checkPrime = n =>{
    if (n<=1) return false;
    if (n<=3) return true;
    let sqrtN = Math.sqrt(n);
    for (let i =2; i<=sqrtN; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(6));
const number = (...numbers) =>
    numbers.filter(num => checkPrime(num));
console.log(number(2,3,4,5,6,7,8,9,11));