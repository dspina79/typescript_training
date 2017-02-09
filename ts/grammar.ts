// examples of declaration and initialization
var x: number = 1;
var firstName: string = 'John';
var lastName: string = 'Smith';


// examples of declarations with and without annotations
var num1 = 100;
var num2 : number = 20;

// function with strongly typed values
function addNumbers(n1: number, n2: number, n3: number){
    var result = n1 + n2 + n3;
    console.log('The sum is: ' + result);
}

addNumbers(num1, num2, 7);

