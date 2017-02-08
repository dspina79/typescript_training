"use strict";
var Car = (function () {
    function Car(engineType) {
        this.engine = engineType;
    }
    Car.prototype.start = function () {
        console.log("The " + this.engine + " engine started...");
    };
    Car.prototype.stop = function () {
        console.log("... The " + this.engine + " engine stopped.");
    };
    return Car;
}());
exports.Car = Car;
var car = new Car("V6");
car.start();
car.stop();
car.engine = "V8";
car.start();
car.stop();
//# sourceMappingURL=Car.js.map