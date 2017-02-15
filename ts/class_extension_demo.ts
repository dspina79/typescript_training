class NameInfo{

    private _nickName: string;
    constructor(public name: string){
        this._nickName = "";
    }

    get nickName(): string{
        return this._nickName
    }

    set nickName(value: string){
        if(value === undefined) throw "Nickname not provided";
        this._nickName = value;
    }
}

class Animal{
    constructor(public name: NameInfo){

    }

    speak(){
        var nameToUse = this.name.nickName === undefined ? this.name.name : this.name.nickName;
        return nameToUse + " says 'mew'";
    }
}

class Cat extends Animal{
    constructor(public name: NameInfo, public numWiskers: number){
        super(name);

    }

    actCute(): string{
        return "Acts cute with its " + this.numWiskers + " whiskers";
    }
}
var bobName = new NameInfo("Bob");
bobName.nickName = "Bobby";
var steveName = new NameInfo("Steve");
steveName.nickName = "Stevie";

var bob = new Animal(bobName);
console.log(bob.speak());

var steve = new Cat(steveName, 8);
console.log(steve.speak());
console.log(steve.actCute());