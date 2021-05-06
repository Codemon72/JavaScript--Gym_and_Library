sources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

The catch() method returns a Promise and deals with rejected cases only.

**Note**: the examples below are throwing instances of Error. This is considered good practice in contrast to throwing Strings; otherwise, the part doing the catching would have to perform checks to see if the argument was a string or an error, and you might lose valuable information like stack traces.

Examples:
```js
const p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.error(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```