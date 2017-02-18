// enforce consistency with code contracts
// eg. interfaces

interface IEngine{
    start(callback:(startStatus:boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void) : void; 
}

interface IOilEngine{
    oilLevel: number;
    changeOil() : void;
    useOil(amount?: number): void;
}

interface IAutoOptions{
    engine: IEngine;
    blasePrice: number;
    state: string;
    make?: string;
    model?: string;
    year?: number;
}

// extending an interface
interface ITruckOptions extends IAutoOptions{
    bedLength?: string;
    fourByFour: boolean;
}

class CarEngine implements IOilEngine{
    oilLevel: number;
    constructor(public horsePower: number, public engineType: string){
        this.oilLevel = 100;
    }

    get OilLevel(){
        return this.oilLevel;
    }

    useOil(amount?: number){
        if(amount != undefined){
            this.oilLevel -= amount;
        }
        else{
            this.oilLevel--;
        }
    }

    changeOil(){
        this.oilLevel = 100;
    }

    start(callback: (startStatus: boolean, engineType: string) => void){
        setTimeout(() => {
                callback(true, this.engineType);
        }, 1000);
        this.useOil(10);
    }

    
    stop(callback: (stopStatus: boolean, engineType: string) => void){
        setTimeout(() => {
                callback(false, this.engineType);
        }, 1000);

    }
}


var myEngineFunc = function(status: boolean, type:string){
    var startOrStop = status ? "started" : "stopped";
    console.log(type + " engine started - " + startOrStop);
};

var engine1 = new CarEngine(120, "V8");
console.log("Engine is initialized...");
// alternative way of handling the callback
// engine1.start( (status: boolean, type: string) => {
//     console.log(type + " is started.");
// });
engine1.start(myEngineFunc);
console.log("Oil level: " + engine1.OilLevel.toString());
console.log('Replenishing oil...');
engine1.changeOil();
console.log("Oil level: " + engine1.OilLevel.toString());
engine1.stop(myEngineFunc);
