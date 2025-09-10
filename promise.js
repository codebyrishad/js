// let mypromise= new Promise((resolve,reject) => {
//         let bookavailabe = false;
//         if(bookavailabe){
//             console.log("book is available")
//         }else{
//             console.log("book isnt available");
            
//         }
// })


// function step1(){
//     return new Promise(
//         (resolve,reject) => {
//             console.log("Starting...")
//             setTimeout(() => {
//                 console.log("Step 1 is Completed")
//                 resolve()
//             },4000)
//         }
//     )
// }
// function step2(){
//     return new Promise(
//         (resolve,reject) => {
//             console.log("Step 2 Started")
//             setTimeout(() => {
//                 console.log("Step 2 is Completed")
//                 resolve()
//             },3000)
//         }
//     )
// }
// function step3(){
//     return new Promise(
//         (resolve,reject) => {
//             console.log("Step 3 Started")
//             setTimeout(() => {
//                 console.log("Step 3 is Completed")
//                 resolve()
//             },2000)
//         }
//     )
// }
// function step4(){
//     return new Promise(
//         (resolve,reject) => {
//             console.log("Step 4 Started")
//             setTimeout(() => {
//                 console.log("Step 4 is Completed")
//                 resolve()
//             },1000)
//         }
//     )
// }

// async function x(){
// try {
//     await step1()
//     await step2()
//     await step3()
//     await step4()
//     console.log("all step completeed")
//     }
//     catch(error){
//         console.error("It is error",error)
//     }
// }
// x()


// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(() => console.log("All steps are comleted"))
// .catch(() => console.log("Process Failed"))



// let oddnumbers = new Promise((resolve,reject) =>{
//     let number = 0;
//     if (number % 2 !== 0){
//         resolve(" number is odd")
//     }else if(number % 2===0){
//         resolve("numbers is even")
// }else {
//     reject("its zero")
// }
// });

// oddnumbers
// .catch(err => console.error(
//     err))
// .then(msg=>console.log(msg))


//Q  Create a promise that resolves with "Hello, World!" and log the value using .then()


// let greet= new Promise((resolve,reject)=>{
//     resolve("hello world")
// });
// greet
// .then(word => console.log(word))



// Q Can you try making a rejected promise (like reject("something went wrong")) and handle it with .catch()

// let rej= new Promise((resolve,reject)=>{
//     reject("something went wrong")
// });

// rej.catch(err => console.error(err))


// //Q 👉 Create a promise that checks if a number is positive.

// // If the number is greater than 0 → resolve("Positive number")

// // Otherwise → reject("Not positive")

// // Then, handle it with .then() and .catch().

// let ve = new Promise((resolve,reject) =>{
//     let number = -1;
// if(number > 0){
//     resolve("positive number")
// }else{
//     reject("its a negative number")
// }    
// })


// ve
// .then(msg=>console.log(msg))
// .catch(err=> console.error(err))


// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("✅ Task completed!");
//   } else {
//     reject("❌ Task failed!");
//   }
// });

// myPromise
//   .then(result => console.log(result))   // runs if resolved
//   .catch(error => console.log(error))   // runs if rejected
//   .finally(() => console.log("Promise finished"));




function cleanhouse(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("cleaned house")
        },500)
    })
}
function taketrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("took out trash")
        },1500)
    })
}
function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" walked the dog")
        },2500)
    })
}

cleanhouse()
.then(value=>{console.log(value); return taketrash()})
.then(value=>{console.log(value);return walkdog()})
// .then(value=>console.log(value))
.then(value=>{console.log(value); console.log("you have finished all chores")})


