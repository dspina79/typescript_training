// this example will not work in node.js unless
// require is used and the module is placed into
// a file with the same name as the module/namespace

/// <reference path="./module_demo.ts" />
/// <reference path="./internal_module_demo.ts" />

import Shp = Shapes;

var r1: IRectangle = new Shp.Rectangle(30, 40);
var pnt1 = new Shp.Point(6, 8);

console.log(r1.getArea());
console.log(pnt1.getDist());