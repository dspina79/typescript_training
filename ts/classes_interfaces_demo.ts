// enforce consistency with code contracts
// eg. interfaces

interface IEngine{
    start(callback:(startStatus:boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string) => void) : void; 
}

interface IAutoOptions{
    engine: IEngine;
    blasePrice: number;
    state: string;
    make?: string;
    model?: string;
    year?: number;
}

class CarEngine implements IEngine{

    constructor(public horsePower: number, public engineType: string){
    
    }

    start(callback: (startStatus: boolean, engineType: string) => void){
        setTimeout(() => {
                callback(true, this.engineType);
        }, 1000);
    }

    
    stop(callback: (stopStatus: boolean, engineType: string) => void){
        setTimeout(() => {
                callback(true, this.engineType);
        }, 1000);
    }
}


var engine1 = new CarEngine(120, "V8");
console.log("Engine is initialized...");
engine1.start( (status: boolean, type: string) => {
    console.log(type + " is started.");
});

