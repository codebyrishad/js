const obj1={
    name:"rishad",
    address:{
        city:"malappuram",
        pin:675604
    }
}

const obj2={...obj1}

obj2.name="amal"
obj2.address.city="kozhikode"

console.log(obj1.address.city)
console.log(obj2.address.city)
