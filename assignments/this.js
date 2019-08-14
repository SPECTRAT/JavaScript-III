/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window binding: If "this" is on a global scope it will reference the browser window or console.
* 2. Implicit binding: When a context is made inside an object and you use "this" to reference that the conext within the object using dot notation.
* 3. New Binding: When "this" refers to the an object that's been created and returned in a constructor function. 
* 4. Explicit Binding: An instance where "this" is defined when using .call or .apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1

function heeeresWindow() {
  console.log(this);
}

heeeresWindow();

// Principle 2
const hiHoney = {
  greeting: `, I'm hoooome!`,
  welcomeHome: function(name) {
    console.log(`${name}${this.greeting}`);
    console.log(this);
    //shows that "this" is referencing the objects's contents...
  }
};

hiHoney.welcomeHome("Lucy");

// Principle 3
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();
console.log(jerry);

// Principle 4

// code example for Explicit Binding