function*greetgenerator(){
    yield "hello ";
    yield "how are you" ;
    yield "goodbye";
}

const gen = greetgenerator();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)