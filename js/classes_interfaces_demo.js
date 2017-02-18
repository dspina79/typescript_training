// enforce consistency with code contracts
// eg. interfaces
var CarEngine = (function () {
    function CarEngine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
        this.oilLevel = 100;
    }
    Object.defineProperty(CarEngine.prototype, "OilLevel", {
        get: function () {
            return this.oilLevel;
        },
        enumerable: true,
        configurable: true
    });
    CarEngine.prototype.useOil = function (amount) {
        if (amount != undefined) {
            this.oilLevel -= amount;
        }
        else {
            this.oilLevel--;
        }
    };
    CarEngine.prototype.changeOil = function () {
        this.oilLevel = 100;
    };
    CarEngine.prototype.start = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
        this.useOil(10);
    };
    CarEngine.prototype.stop = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(false, _this.engineType);
        }, 1000);
    };
    return CarEngine;
}());
var myEngineFunc = function (status, type) {
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
//# sourceMappingURL=classes_interfaces_demo.js.map