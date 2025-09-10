
// fetch("https://dummyjson.com/users")
// .then(res=>res.json())
// .then(a=>{
//     a.users.map(user=>{
//         console.log(user.gender,user.lastName)
//     });
// })
// .catch(err=>console.log(err))


// fetch("https://dummyjson.com/users")
// .then( res =>res.json())
// .then(data =>{
//     data.users.map(info=>console.log(info.firstName,info.age))
// })
// .catch(err=>console.log(err))


// fetch("https://dummyjson.com/users")
// .then(res =>res.json())
// .then(data => {
//     data.users.map(user=> console.log(user.firstName))})
// .catch(err=>console.log(err))


// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response=> response.json())
// .then(data=>{
//     console.log(data.name)

//     data.abilities.forEach(item=>{
//      console.log("ability",item.ability.name)}
//     )
// })
// .catch(err=> console.log(err))

pokemon()
async function pokemon(){
    try{
        const response= await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        
        if(!response.ok){
            throw new Error("couldnot fetch errors")
        }
        const data= await response.json()
        console.log(data)

    }
    catch(error){
    console.log(error)

    }
}