// global interface

interface IRectangle{
    height: number;
    width: number;
    getArea(): number;
}
namespace Shapes{

    export class Rectangle implements IRectangle{
        constructor(public width: number, public height: number){}

        getArea(){
            return this.width * this.height;
        }
    }
}

var rect: IRectangle = new Shapes.Rectangle(10, 4);
console.log("The area is: " + rect.getArea());