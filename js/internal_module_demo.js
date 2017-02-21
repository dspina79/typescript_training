// global interface
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(10, 4);
console.log("The area is: " + rect.getArea());
//# sourceMappingURL=internal_module_demo.js.map