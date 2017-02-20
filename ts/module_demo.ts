// module examples
// separating pieces of code

// can also use namespace or module
namespace Shapes{

    export interface IPoint{
        getDist(): number;
    }

    export class Point implements IPoint{
        constructor(public x: number, public y: number){

        }
        getDist(){
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }

}

var pt: Shapes.IPoint = new Shapes.Point(3, 4);
var dist = pt.getDist();
console.log("The distance between the points is: " + dist.toString());