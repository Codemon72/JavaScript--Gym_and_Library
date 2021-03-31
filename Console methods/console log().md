
### `console.log()` with context
```js
const pin1 = 'Vilnius'
const pin2 = 'Auckland'
console.log(pin1, pin2)
// -> Vilnius Auckland
```
```js
const pin1 = 'Vilnius'
const pin2 = 'Auckland'
console.log({pin1, pin2})
// > {pin1: "Vilnius", pin2: "Auckland"}
```

### Logging objects
Don't use `console.log(obj)`, use `console.log(JSON.parse(JSON.stringify(obj)))`.

This way you are sure you are seeing the value of obj at the moment you log it. Otherwise, many browsers provide a live view that constantly updates as values change. This may not be what you want.