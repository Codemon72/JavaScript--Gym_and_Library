"If you just really know JavaScript well you can switch frameworks very easily and it's not a big deal." Brad Traversy 

Brad Traversy: [Before Learning a JavaScript Framework...](https://www.youtube.com/watch?v=Cm3U-NgJb9I&feature=youtu.be)

___
### Debugging

- `console.log()`
- `debugger` statement
- Browser Dev Tools

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


#### `debugger`statement
It is possible to add a breakpoint in the source code using the `debugger` statement. Once a debugger statement is reached, execution stops. The context of the current scope is exposed in the console, together with all local and global variables. Values of variables can be inspected by moving the cursor over them.

Conditional breakpoints can also be created in the code:
```js
if ( condition ) {
    debugger;
}
```

#### Dev Tools
Breakpoints and conditional breakpoints can also be inserted in the Dev Tools of your choice. In the Chrome Dev Tools, clicking on a line number in the Sources view adds a breakpoint. If you right click on a breakpoint and select “Edit Breakpoint”, you can also add a condition.

sources: 
- James Q Quick [tutorial for Debugging in VSCode and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk)
- http://www.zsoltnagy.eu/javascript-debugging-tips-and-tricks/

___ 


