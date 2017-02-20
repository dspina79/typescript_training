// module examples
// separating pieces of code
// can also use namespace or module
var Shapes;
(function (Shapes) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDist = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));
var pt = new Shapes.Point(3, 4);
var dist = pt.getDist();
console.log("The distance between the points is: " + dist.toString());
//# sourceMappingURL=module_demo.js.map