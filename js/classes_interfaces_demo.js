// enforce consistency with code contracts
// eg. interfaces
var CarEngine = (function () {
    function CarEngine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    CarEngine.prototype.start = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    CarEngine.prototype.stop = function (callback) {
        var _this = this;
        setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return CarEngine;
}());
var engine1 = new CarEngine(120, "V8");
console.log("Engine is initialized...");
engine1.start(function (status, type) {
    console.log(type + " is started.");
});
//# sourceMappingURL=classes_interfaces_demo.js.map