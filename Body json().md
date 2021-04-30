takes a Response stream and reads it to completion. 
It returns a **promise which resolves with a JavaScript object** that is the result of parsing the body text as JSON.

### Syntax
```js
response.json().then(data => {
  // do something with your data
});
```

### Return value
A Promise that resolves to a JavaScript object. 
This object could be anything that can be represented by JSON — an object, an array, a string, a number...