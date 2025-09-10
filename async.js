
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

async function dochores(){
    const cleanedhouse= await cleanhouse();
    console.log(cleanedhouse);

    const tooktrash= await taketrash();
    console.log(tooktrash);

    const wentdog=  await walkdog();
    console.log(wentdog);
    console.log("you have done all chores")
    
}

dochores();
