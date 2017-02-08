export class Car{
    engine: string;

    constructor(engineType: string){
        this.engine = engineType;
    }

    start(){
        console.log("The " + this.engine + " engine started...");
    }

    stop(){

        console.log("... The " + this.engine + " engine stopped.");
    }
}

var car = new Car("V6");

car.start();
car.stop();

car.engine = "V8";
car.start();
car.stop();

