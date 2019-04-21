// CONSOLE GENERICS
// how do you log to console
  console.log();
// how to print object {a:1, b:2} to console in a table
  console.table({a:1, b:2});
// how to log the error message "this is an error" to console
  console.error("this is an error message");
// how to log the warning message "this is a warning"
  console.warn("this is a warning");
// how do you clear the console
  console.clear();
// how do you see how long it takes to execute the following instruction : console.log("see how long this takes")
  console.time("identifier");
    // set of instructions
    console.log("see how long this takes");
  console.timeEnd("identifier");

// VARIABLES
// how do you declare a variable of type var called name
  var name;
  let name;
  const name;
// how do you assign a new value to a variable of type var called name
  var name = "John Doe";
  let name = "John Doe";
  const name = "John Doe";
// what cannot be put at the start in a variable name in js
  // a number
// what character can a js variable name contain
  // letters, numbers, _, $
// what cannot be done with a js varible of type const
  // it cannot be reassigned
// what is needed when declaring a js varible of type const
  // initialization
// can an object contained in a js varible of type const change his data
  // yes
// article on var vs let : https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

//DATATYPES
// where are primitive data types stored
  // on the stack
// where are reference data types stored 
  // on the heap
// what are the primitive data types in js
  // String, Number, Boolean, Null, Undefined, Symbols
// name 5 reference data types in js
  // Arrays, Object literals, Functions, Dates
// what does it mean that js is a dynamically typed language
  // we do not need to specify data types
// how to log the type of a varible containing a string
  const name = "John Doe";
  console.log(typeof name);
// what is the type of null
  // object (bug in js)
// declare a String
  const name = "John Doe";
// declare a number
  const age = 35;
// declare a boolean
  const hasKids = true;
// declare an undefined variable
  let car;
// declare a symbol
  const sym = Symbol();
// declare an array
  const arr = ['movies', 'cars'];
// declare an object literal 
  const adress = {
    city: 'Boston',
    state: 'MA'
  }
// declare a date
  const today = new Date();

// TYPE CONVERSION
// initialize a variable with a number converted to string and console log its value and type
  let val = String(4);
  console.log(val);
  console.log(typeof val);
// initialize a variable with a string converted to number and console log its value and type
  val = Number("123");
  console.log(val);
  console.log(typeof val);
// convert a number to a string using the .toString() method and console log its value and type
  val = (3).toString();
  console.log(val);
  console.log(typeof val);
// convert a boolean to a number and console log its value and type
  val = Number(true);
  console.log(val);
  console.log(typeof val);
// how do you parse a string to int
  val = parseInt('100');
  console.log(val);
  console.log(typeof val);
// how do you parse a string to float
  val = parseFloat('199.19');
  console.log(val);
  console.log(typeof val);
// give a simple example of type coercion
  val1 = 5;
  val2 = String(4);
  val = val1 + val2;
  console.log(val);
  console.log(typeof val); 

// NUMBERS
// print to cosole the pi number
  console.log(Math.PI);
// round the pi number up
  console.log(Math.ceil(Math.PI));
// round the pi number down
  console.log(Math.floor(Math.PI));
// print the square root of 64
  console.log(Math.sqrt(64));
// print the absolute value of a negative number
  console.log(Math.abs(-3));
// print the min val of the following numbers : 1 2 3 
  console.log(Math.min(1,2,3));
// print the max val of the following numbers : 1 2 3 
  console.log(Math.max(1,2,3));
// generate a random whole number between 1 and 20
  console.log(Math.floor(Math.random() * 20 + 1));

// STRINGS
// concatenate the strings Wiliam and Johnson
  const firstName = 'Wiliam';
  const lastName = 'Johnson';
  let val;
  val = firstName + lastName;
// append the string Johnson to the string William
  val = 'William';
  val += 'Johnson';
// how do you escape special characters in js 
  val = "something containing \'special\' characters";
// print lenght of a string
  console.log(val.length);
// concatenate two strings using the .concat method
  val = firstName.concat(lastName);
// print the third character of a string
  console.log(val[2]);
// print the index value of a certain letter
  console.log(val.indexOf('a'));
// print the last character of a string
  console.log(val.charAt(val.length - 1));
// print a substring containing the first five letters
  console.log(val.substring(0,4));
// print a substring containing the last 3 characters
  console.log(val.slice(-3));
// split a string into an array with the space separator
  console.log(val.split(' '));
// replace a string in another string
  console.log(val.replace('Wiliam', 'Doe'));
// check if a string includes another
  console.log(val.includes('Johnson'));


