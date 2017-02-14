var interface_demo;
(function (interface_demo) {
    var squareItBasic = function (num) { return num * num; };
    var squareItBasic2 = function (num) { return num * num; };
    var squareItRectangle;
    var p = {
        name: "Liam",
        age: 40,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function () {
            if (this.age !== undefined) {
                this.age--;
            }
        },
        greet: function (msg) {
            return msg + ", " + this.name;
        }
    };
    console.log("Current age: " + p.age);
    p.makeYounger();
    console.log("New age: " + p.age);
    console.log("There are " + p.calcPets() + " pets.");
    console.log(p.greet("Greetings"));
})(interface_demo || (interface_demo = {}));
//# sourceMappingURL=interfaces.js.map