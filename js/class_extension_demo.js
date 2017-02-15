var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NameInfo = (function () {
    function NameInfo(name) {
        this.name = name;
        this._nickName = "";
    }
    Object.defineProperty(NameInfo.prototype, "nickName", {
        get: function () {
            return this._nickName;
        },
        set: function (value) {
            if (value === undefined)
                throw "Nickname not provided";
            this._nickName = value;
        },
        enumerable: true,
        configurable: true
    });
    return NameInfo;
}());
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        var nameToUse = this.name.nickName === undefined ? this.name.name : this.name.nickName;
        return nameToUse + " says 'mew'";
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, numWiskers) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.numWiskers = numWiskers;
        return _this;
    }
    Cat.prototype.actCute = function () {
        return "Acts cute with its " + this.numWiskers + " whiskers";
    };
    return Cat;
}(Animal));
var bobName = new NameInfo("Bob");
bobName.nickName = "Bobby";
var steveName = new NameInfo("Steve");
steveName.nickName = "Stevie";
var bob = new Animal(bobName);
console.log(bob.speak());
var steve = new Cat(steveName, 8);
console.log(steve.speak());
console.log(steve.actCute());
//# sourceMappingURL=class_extension_demo.js.map