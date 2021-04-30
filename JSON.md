source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
JSON validator: https://jsonlint.com/

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

- Keys must be strings, and values must be a valid JSON data type (string, number, object, array, boolean or null).
- file type is `.json`
- MIME type is `Application/json`

JSON looks very much like a JS object, but there are differences. 
- JSON keys **must** be wrapped **in double quotes**: `" "`
- JSON **string values** must be wrapped **in double quotes** as well. (Single quotes would be invalid.)
- JSON values can't be a function, date or undefined 
- all JSON is valid JS, but not all JS objects are valid JSON

Any top level properties are called 'resources'. A bit like a table in a relational database.


#### Methods
The JSON object has 2 methods:

`JSON.parse(text[, reviver])`
Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.

`JSON.stringify(value[, replacer[, space]])`
Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined are replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.

Example: 
```json

```

### Json file
- if you create a `.json` file it will automatically put everything into a string. (It knows it's a JSON file.)