// #1 Using !! to Convert to Boolean
let truthyValue = !!1; // true
let falsyValue = !!0; // false

// 2. Default Function Parameters
// Set default values for function parameters to avoid undefined errors.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 3. The Ternary Operator for Short If-Else
// A shorthand for the if-else statement.
let price = 100;
let message = price > 50 ? "Expensive" : "Cheap";

// Template Literals for Dynamic Strings
// Use template literals for embedding expressions in strings.

let item = "coffee";
let price = 15;
console.log(`One ${item} costs $${price}.`);


// 5. Destructuring Assignment
// Easily extract properties from objects or arrays.

let [x, y] = [1, 2];
let {name, age} = {name: "Alice", age: 30};

// 6. The Spread Operator for Array and Object Cloning
// Clone arrays or objects without referencing the original.

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

// 7. Short-circuit Evaluation
// Use logical operators for conditional execution.

let isValid = true;
isValid && console.log("Valid!");

// 8. Optional Chaining (?.)
// Safely access nested object properties without an error if a reference is nullish.

let user = {name: "John", address: {city: "New York"}};
console.log(user?.address?.city); // "New York"

// 9. Nullish Coalescing Operator (??)
// Use ?? to provide a default value for null or undefined.

let username = null;
console.log(username ?? "Guest"); // "Guest"


// 10. Using map, filter, and reduce for Array Manipulation
// Elegant ways to handle arrays without traditional loops.

// Map
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);

// Filter
const evens = numbers.filter(x => x % 2 === 0);

// Reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


// 11. Tagged Template Literals
// Function calls using template literals for custom string processing.

function highlight(strings, ...values) {
    return strings.reduce((prev, current, i) => `${prev}${current}${values[i] || ''}`, '');
}
let price = 10;
console.log(highlight`The price is ${price} dollars.`);


// 13. The Set Object for Unique Elements
// Use Set to store unique values of any type.

let numbers = [1, 1, 2, 3, 4, 4];
let uniqueNumbers = [...new Set(numbers)];


// 14. Dynamic Property Names in Objects
// Use square brackets in object literal notation to create dynamic property names.

let dynamicKey = 'name';
let person = {[dynamicKey]: "Alice"};

// 15. Function Currying Using bind()
// Create a new function that, when called, has its this keyword set to the provided value.

function multiply(a, b) {
    return a * b;
}
let double = multiply.bind(null, 2);
console.log(double(5)); // 10

// 16. Using Array.from() to Create Arrays from Array-like Objects
// Convert array-like or iterable objects into true arrays.

let nodeList = document.querySelectorAll('div');
let nodeArray = Array.from(nodeList);

// 17. The for…of Loop for Iterable Objects
// Iterate over iterable objects (including arrays, maps, sets, etc.) directly.

for (let value of ['a', 'b', 'c']) {
    console.log(value);
}

// 18. Using Promise.all() for Concurrent Promises
// Run multiple promises concurrently and wait for all to settle.

let promises = [fetch(url1), fetch(url2)];
Promise.all(promises)
    .then(responses => console.log('All done'));

// 19. The Rest Parameter for Function Arguments
// Capture any number of arguments into an array.

function sum(...nums) {
    return nums.reduce((acc, current) => acc + current, 0);
}

// 20. Memoization for Performance Optimization
// Store function results to avoid redundant processing.

const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        let n = args[0];  // assuming single argument for simplicity
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};

// 21. Using ^ for Swapping Values
// Swap the values of two variables without a temporary variable using the XOR bitwise operator.

let a = 1, b = 2;
a ^= b; b ^= a; a ^= b; // a = 2, b = 1

// 22. Flattening Arrays with flat()
// Easily flatten nested arrays using the flat() method, with the depth of flattening as an optional argument.

let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(Infinity);

// 23. Converting to Numbers with Unary Plus
// Quickly convert strings or other values to numbers using the unary plus operator.

let str = "123";
let num = +str; // 123 as a number

// 24. Template Strings for HTML Fragments
// Use template strings to create HTML fragments, making dynamic HTML generation cleaner.

let items = ['apple', 'orange', 'banana'];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

// 25. Using Object.assign() for Merging Objects
// Merge multiple source objects into a target object, effectively combining their properties.

let obj1 = { a: 1 }, obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2);

// 26. Short-circuiting for Default Values
// Utilize logical operators to assign default values when dealing with potentially undefined or null variables.

let options = userOptions || defaultOptions;

// 27. Dynamically Accessing Object Properties with Bracket Notation
// Access properties of an object dynamically using bracket notation, useful when the property name is stored in a variable.

let property = "name";
let value = person[property]; // Equivalent to person.name

// 28. Using Array.includes() for Presence Check
// Check if an array includes a certain value with includes(), a clearer alternative to indexOf.

if (myArray.includes("value")) {
    // Do something
}

// 29. The Power of Function.prototype.bind()
// Bind a function to a context (this value) and partially apply arguments, creating more reusable and modular code.

const greet = function(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
};
const greetJohn = greet.bind({name: 'John'}, 'Hello');
console.log(greetJohn('!')); // "Hello, John!"

// 30. Preventing Object Modification
// Prevent modifications to an object using Object.freeze(), making it immutable. For deeper immutability, consider libraries that enforce immutability more thoroughly.

let obj = { name: "Immutable" };
Object.freeze(obj);
obj.name = "Mutable"; // Fails silently in non-strict mode