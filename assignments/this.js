/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window binding: If "this" is on a global scope it will reference the browser window or console.
* 2. Implicit binding: When a context is made inside an object and you use "this" to reference that the conext within the object using dot notation.
* 3. New Binding: When "this" refers to the an object that's been created and returned in a constructor function. 
* 4. Explicit Binding: An instance where "this" is defined in parameters when using .call or .apply is used.
*
* write out a code example of each explanation above
*/
console.log("-------------------THIS-------------------------")

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
  }
};

hiHoney.welcomeHome("Lucy");

// Principle 3

function Student(name, major, gradClass) {
  this.name = name;
  this.major = major;
  this.gradClass = gradClass;
  this.studentProfile = function() {
    console.log(`${this.name} is a major in ${this.major}, set to graduate in ${this.gradClass}.`);
  };
}

let freshman = new Student('Reggie Smith', 'Education', 2023);
let sophomore = new Student('Chris Diddly', 'Fine Arts', 2022);
let junior = new Student('Bart Simpson', 'Slacking Off', '...who knows when');
let senior = new Student('Elijah Williams', 'Psychology', 2021 );

freshman.studentProfile();
sophomore.studentProfile();
junior.studentProfile();
senior.studentProfile();

// Principle 4

//(using the above code)
console.log("------------");
freshman.studentProfile.call(senior);
junior.studentProfile.call(senior);
freshman.studentProfile.call(sophomore);

