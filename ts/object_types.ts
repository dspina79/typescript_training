module object_types{

    //object_types
    var points1 = {x: 10, y: 20};
    var x = points1.x;

    var points2: {};
    points2 =  {x: 10, y: 20};

    var points3: Object = {x: 1};
   

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function(){
            return this.w * this.h;
        }
    };

    console.log(rectangle.calcArea());

    // generate function using options class
    var generateArea = function(rect: {h: number, w?: number}){
        if(rect.w === undefined){
            return rect.h * rect.h;
        }

        return rect.h * rect.w;
    };

    console.log(generateArea({h: 20}));
    console.log(generateArea({h: 20, w: 30}));

}