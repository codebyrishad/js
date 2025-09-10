const obj1={
    name:"rishad",
    address:{
        city:"malappuram",
        pin:675604
    }
}


const obj2=JSON.parse(JSON.stringify(obj1))

obj2.address.city="kozhikode"

console.log(obj1.address.city)
console.log(obj2.address.city)



