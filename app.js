const stringUtil = require('./stringUtil');
//import {capitalize, reverse, contains} from './stringUtil.js';

// Test capitalize
console.log("Capitalize first letter of the string:");
console.log(stringUtil.capitalize("launch Code"));   // Output: Hello
console.log(stringUtil.capitalize(""));        // Output: (empty string)
console.log(stringUtil.capitalize(undefined)); // Output: (empty string)

// Test reverse
console.log("\nReverse given string:");
console.log(stringUtil.reverse("JavaScript")); // Output: tpircSavaJ
console.log(stringUtil.reverse("")); // Output: (empty string)
console.log(stringUtil.reverse("Inheretance")); // Output: ecnaterehnI
console.log(stringUtil.reverse(undefined)); // Output: (empty string)

// Test contains
console.log("\ncheck if the string Contains another string:");
console.log(stringUtil.contains("Launch code", "code")); // Output: true
console.log(stringUtil.contains("hello world", "js"));    // Output: false
console.log(stringUtil.contains("", "a"));                // Output: false
console.log(stringUtil.contains("test", ""));             // Output: true

