// find the given number is odd or even
n = 11
console.log(n % 2);

console.log(n % 2 == 0);

if (n % 2 == 1) { //if block
    console.log("odd number");
}
else { //else block
    console.log("even number");
}

// + : adition
// - : sub
// * : mul
// / : div
// % : mod
// = : assign
// == : compare data
// === : compare data and type
// < : less than
// > : greater than

//find which number is bigger

let x = 20;
let y = 20;

if (x > y) {
    console.log("x is greater");
} else if (y > x) {
    console.log("y is greater");
} else {
    console.log("both are equal");
}

//switch case
let statecode = "tn"
switch (statecode) {
    case "ts":
        console.log("hyderabad");        
        break;
    case "tn":
        console.log("chennai");
        break;
    case "ka":
        console.log("bangalore");
        break;
    default:
        console.log("statecode not found");        
        break;
}