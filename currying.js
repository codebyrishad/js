// function add(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(add(2)(3));


function multiply(a){
    return function(b){
        return a*b;
    }
}

//console.log(multiply(5)(5))

const multiplyby2=multiply(2);    // preseting a=2
console.log(multiplyby2(6))
console.log(multiplyby2(45))