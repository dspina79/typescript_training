var Engine = (function () {
    function Engine(hp, engineType) {
        this.hp = hp;
        this.engineType = engineType;
    }
    return Engine;
}());
var BasicCar = (function () {
    // initialize field inside the constructor
    function BasicCar(engine) {
        this.engine = engine;
    }
    BasicCar.prototype.start = function () {
        return "Started " + this.engine;
    };
    BasicCar.prototype.stop = function () {
        return "Stopped " + this.engine;
    };
    return BasicCar;
}());
var NewCar = (function () {
    function NewCar(engine) {
        this._engine = engine;
    }
    Object.defineProperty(NewCar.prototype, "engine", {
        // properties
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply an engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    NewCar.prototype.start = function () {
        console.log("Started " + this.engine.engineType);
    };
    return NewCar;
}());
var engine = new Engine(120, "V8");
var carWithProps = new NewCar(engine);
carWithProps.engine.hp = 150;
carWithProps.start();
// example of casting
// fails
//var table: HTMLTableElement = document.createElement('table');
//works
var table = document.createElement('table');
//# sourceMappingURL=classes_demo.js.map