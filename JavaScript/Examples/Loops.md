can execute a block of code a number of times

JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
```
let txt = "";
const person = {fname:"John", lname:"Doe", age:25}; 

for (x in person) {
  txt += person[x] + " ";
}
```
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

source: https://www.w3schools.com/js/js_loop_for.asp