//find factors of a given number e.g 20 -  1 2 4 5 10 20
let n = 20

for(let i=1;i<=20; i++){
    if (n%i==0){
        console.log(i);
        
    }
}
//find factorial of a given number e.g 5 - 5*4*3*2*1

let n1 = 5;
let res = 1;
for(let i=1;i<=5; i++){
    res = res*i
    console.log(res);
    
}

