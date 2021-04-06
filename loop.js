
//print 10 for 5 times

//for : executing a block of code for specific number of times
//while : executing a block of code until condition failed

for(let c=22;c<=26;c++){
    console.log(10);
}

//print numbers from 1 to 10
for(let c=10;c<=20;c++){ //c++ = c=c+1
    console.log(c);
}

for(let c=11;c<=20;c+=2){ //c+=2 = c=c+2
    console.log(c);
}

//reverse order
for (let X=11;X>1;X--) {
        console.log(X);
    }

   for (let X=11;X>1;X-=3) {
        console.log(X);
    }
 

    //multiple 
        let data = [1,2,3,4,5];
    for (let i=0;i<data.length;i++) {
        console.log(data[i]);
    }


    
let den = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
let amount = 9999

let r = amount / den[0]
console.log(r);

amount = amount % den [1]

console.log(amount);



//find odd number in range

for (let n =1;n <=100; n++){
    if (n % n ==0){
        console.log(n + " is a prime number");
        
    }
}

