// basic function
var myFunc = function (h) {
    console.log("Hello " + h);
};
// compact notation
// no "function" keyword shown
var myFunc2 = function (h) { return console.log("Hello there, " + h); };
myFunc("Dean");
myFunc2("Dean");
var squareItSimple = function (h, w) {
    if (w === undefined) {
        return h * h;
    }
    return h * w;
};
var helloWorld = function (name) {
    console.log('Hello ' + (name || 'unknown person'));
};
console.log(squareItSimple(10, 20));
console.log(squareItSimple(10));
helloWorld('Lou');
helloWorld();
var superHelloWorld = function (person) {
    console.log("Hello there, " + person.firstName + " " + (person.lastName || ""));
};
var p1 = { firstName: "Dean", lastName: "Smith" };
var p2 = { firstName: "Lauren" };
superHelloWorld(p1);
superHelloWorld(p2);
//# sourceMappingURL=functions.js.map