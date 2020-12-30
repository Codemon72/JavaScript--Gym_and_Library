```
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
```

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

**Note**: filter() does not execute the function for array elements without values.

**Note**: filter() does not change the original array.

for more bits and bobs check w3schools: https://www.w3schools.com/jsref/jsref_filter.asp