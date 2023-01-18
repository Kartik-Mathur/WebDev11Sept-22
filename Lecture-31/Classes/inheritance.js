class Vehicle{
    constructor(name,model,color){
        this.name = name;
        this.model = model;
        this.color = color;
    }
}

class Car extends Vehicle{
    constructor(name,model,color,tyres){
        super(name,model,color); // Vehicle ke constructor ko call 
        // krega aur vehicle bana dega taaki car ban sake
        this.tyres = tyres;
    }
}

let c = new Car("BMW",2020,"Blue",5);
console.log(c);