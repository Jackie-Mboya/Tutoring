// JavaScript Variables and Data Types

//Three ways to declare variables
//1. let (preferred)
//2. const (constant)
//3. var (old way, avoid using it if possible)
// Variables are labels or containers for storing data values

// Example of declaring variables using let, const, and var

// Declaring a variable (var)
var a = 5;
var b = 10;
var c = a + b;
// Addition
document.getElementById("varDemo").innerHTML = "The sum of a and b is: " + c;
// Multiplication
document.getElementById("varDemo1").innerHTML = "The multiplication of a and b is: " + (a * b);
// Division
document.getElementById("varDemo2").innerHTML = "The division of b by a is: " + (b / a);
// Subtraction
 document.getElementById("varDemo3").innerHTML = "The subtraction of a from b is: " + (b - a);

 //const
 // variables defined with const cannot be reassigned, redeclared and they have a block scope.
 // They must be initialized at the time of declaration
const PI = 3.14159;
document.getElementById("constDemo").innerHTML = "The value of PI is: " + PI;

//DataTypes in JavaScript
let age = 25; // Number
document.getElementById("dataTypeDemo").innerHTML = "John is : " + age + " years old!";
    
let name = "John"; // String
document.getElementById("dataTypeDemo1").innerHTML = "Hello, my name is " + name + ".";
    
let isStudent = true; // Boolean
document.getElementById("dataTypeDemo2").innerHTML = "Is John a student? " + isStudent;
    
let address = { // Object
    street: "123 Main St",
    city: "Nairobi",
    country: "Kenya"
};
document.getElementById("dataTypeDemo3").innerHTML =
    "My address is: " + address.street + ", " + address.city + ", " + address.country;
    
let hobbies = ["reading", "gaming", "coding"]; // Array
document.getElementById("dataTypeDemo4").innerHTML = "John's hobbies are: " + hobbies.join(", ");

let undefinedVar; // Undefined
document.getElementById("dataTypeDemo5").innerHTML = "The value of undefinedVar is: " + undefinedVar;
    
let nullVar = null; // Null
document.getElementById("dataTypeDemo6").innerHTML = "The value of nullVar is: " + nullVar;

//typeof operator
let sampleVar = 42;
document.getElementById("dataTypeDemo7").innerHTML = "The type of sampleVar is: " + typeof sampleVar;

//empty string
let emptyString = "";
document.getElementById("dataTypeDemo8").innerHTML = "The value of emptyString is: '" + emptyString + "'";