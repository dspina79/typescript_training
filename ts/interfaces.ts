module interface_demo{

    interface SquareFunction{
        (x: number): number;
    }

    interface Person{
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: ()  => void;
        greet: (msg: string) => string;
    }

    interface Rectangle{
        h: number;
        w?: number;
    }

    var squareItBasic = (num: number) => num * num;

    var squareItBasic2 : SquareFunction = (num: number) => num * num;
    var squareItRectangle: (rect: Rectangle) => number;
    
    var p: Person = {
        name: "Liam",
        age: 40,
        kids: 4,
        calcPets: function(){
            return this.kids * 2;
        },
        makeYounger: function(){
            if(this.age !== undefined)
            {
                this.age--;
            }
        },
        greet: function(msg: string){
            return msg + ", " + this.name;
        }
    };

    console.log("Current age: " + p.age);
    p.makeYounger();
    console.log("New age: " + p.age);
    

    console.log("There are " + p.calcPets() + " pets.");
    console.log(p.greet("Greetings"));
}