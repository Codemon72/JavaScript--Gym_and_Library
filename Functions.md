

### Default Values
source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#default_parameters

Since ES6 we can set default parameters in the function head:
```js
const multiply = (a, b = 1) => {
  return a * b;
}

multiply(5); // 5
```