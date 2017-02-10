// basic function

var myFunc = function(h:string){
    console.log("Hello " + h);
}

// compact notation
// no "function" keyword shown
var myFunc2 = (h: string) => console.log("Hello there, " + h);

myFunc("Dean");
myFunc2("Dean");


var squareItSimple = function(h: number, w?:number){
    if(w === undefined){
        return h * h;
    }
    
    return h * w;
}

var helloWorld = (name?: string) => {
    console.log('Hello ' + (name || 'unknown person'))
};

console.log(squareItSimple(10, 20));
console.log(squareItSimple(10));
helloWorld('Lou');
helloWorld();

var superHelloWorld = (person: {firstName: string, lastName?:string}) => {
    console.log("Hello there, " + person.firstName + " " + (person.lastName || ""));
};

var p1 = {firstName: "Dean", lastName: "Smith"};
var p2 = {firstName: "Lauren" };

superHelloWorld(p1);
superHelloWorld(p2);