class Engine{
    constructor(public hp: number, public engineType: string){

    }
}

class BasicCar{

    // initialize field inside the constructor
    constructor(public engine: string){

    }

    start(){
        return "Started " + this.engine;
    }

    stop(){
        return "Stopped " + this.engine;
    }


}


class NewCar{

    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }

    // properties
    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine){
        if(value == undefined) throw 'Supply an engine!';
        this._engine = value;
    }

    start(){
        console.log("Started " + this.engine.engineType)
    }
}
var engine = new Engine(120, "V8");
var carWithProps = new NewCar(engine);
carWithProps.engine.hp = 150;
carWithProps.start();

// example of casting
// fails
//var table: HTMLTableElement = document.createElement('table');

//works
var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
 