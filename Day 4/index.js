// Day 4: Class vs. Instance

/* 
 Write a Person class with an instance variable,age, and 
 a constructor that takes an integer,initialAge as a parameter. 
 The constructor must assign initialAge to age after confirming the 
 argument passed as initialAge is not negative; if a negative argument is 
 passed as initialAge, the constructor should set age to 0 and print Age is not 
 valid, setting age to 0.. In addition, you must write the following instance 
 methods: yearPasses() should increase the age instance variable by 1. 
 amIOld() should perform the following conditional actions: 
 If age < 13, print You are young. If  age > and equal 13 and 
 age <18, print You are a teenager..Otherwise, print You are old..
*/


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
    // Add some more code to run some checks on initialAge
   let age;
    
    if (initialAge < 0) {
        console.log("Age is not valid, setting age to 0.")
        age = 0;
    } else {
        age = initialAge
    
    }

  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
        
         if (age < 13) {
          console.log("You are young.");
      } else if (age >= 13 && age < 18) {
          console.log("You are a teenager.");
      } else {
          console.log("You are old.");
      }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          age++;
   };
}

function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}




