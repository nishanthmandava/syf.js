function findFactorial(n){
    let res =1;
    for(let i=1;i<=n;i++){
        res= res*i
 
    }
    return res;
}
let r = findFactorial(3)
console.log("The factorial value is" + r);


