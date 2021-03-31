Find out what is calling the function you put it in.

The console interface's trace() method outputs a stack trace to the Web Console.

Example:
```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```
... will log:
```ssh
bar             @ filename:line
foo             @ filename:line
<anonymous>     @ filename:line
```



source: https://developer.mozilla.org/en-US/docs/Web/API/Console/trace