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