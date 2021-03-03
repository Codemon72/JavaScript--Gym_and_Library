# Method: replace()

returns new string with replaced values

`replace()` can replace the text specified (parameter 1) in the string with parameter 2. 

Searches a string for a specified value, or a "regular expression", and returns a new string where the specified values are replaced.

**Note**: The search is **case-sensitive**.

**Note**: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

**Note**: This method does not change the original string.

#### Syntax

`string.replace(searchvalue, newvalue)`

**Return Value**:	A new String, where the specified value(s) has been replaced by the new value

Parameters

- searchvalue	- Required. The value, or regular expression, that will be replaced by the new value
- newvalue -	Required. The value to replace the search value with

**Examples**:

```js
let str = "this is an example.";
var result = str.replace("this", "that");
console.log(result);

// output: that is an example.
```

Perform a **global** replacement:

```
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");

// output: Mr Blue has a red house and a red car.
```

Perform a **global, case-insensitive** replacement:
```
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/gi, "red");

// output: Mr red has a red house and a red car.
```



source: https://www.w3schools.com/jsref/jsref_replace.asp