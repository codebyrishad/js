class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }

  start(){
   console.log(`${this.brand},${this.model} has started`)}
}

let car1= new car("tayota", "corolla")
car1.start()


