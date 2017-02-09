"use strict";
var NameCollection = (function () {
    function NameCollection(name) {
        this.names = [];
        this.names.push(name);
    }
    NameCollection.prototype.add = function (newName) {
        this.names.push(newName);
    };
    NameCollection.prototype.printout = function () {
        for (var i = 0; i < this.names.length; i++) {
            console.log(this.names[i]);
        }
    };
    return NameCollection;
}());
exports.NameCollection = NameCollection;
var nc = new NameCollection('Dave');
nc.add('Kate');
nc.add('Emily');
nc.printout();
//# sourceMappingURL=NameCollection.js.map