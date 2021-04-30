takes a Response stream and reads it to completion. 
It returns a **promise which resolves with a JavaScript object** that is the result of parsing the body text as JSON.

### Watch out: don't confuse this method with `json()` from the Express framework!
```js
.then(result => res.status(200).json(result))
```
Here we send JSON to the client by using Response.json(). 
It accepts an object or array, and converts it to JSON before sending it


### Syntax
```js
response.json().then(data => {
  // do something with your data
});
```

### Parameters
- none

### Return value
A Promise that resolves to a JavaScript object. 
This object could be anything that can be represented by JSON — an object, an array, a string, a number...