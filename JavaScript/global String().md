converts an object's value to a string

The String() function converts the value of an object to a string.

Note: The String() function returns the same value as toString() of the individual objects.


### Syntax
`String(object)`

Parameter	
- object	- Required. A JavaScript object

Example:
```
String(Boolean(0))  // returns: false
String(Boolean(1))  // returns: true
String(new Date())  // returns sth like: Mon Feb 22 2021 12:32:50 GMT+0100 (Central European Standard Time) 
String("12345")     // returns: 12345
String(12345)       // returns: 12345
```
source: https://www.w3schools.com/jsref/jsref_string.asp