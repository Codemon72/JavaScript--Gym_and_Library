The Console object provides access to the browser's debugging console.

Methods worth trying out:
```js
// log tabular data as a table
console.table();

// log in red and where it is
console.error();

console.clear();
// log in yellow and where it is
console.warn();

// timer - needs an identifier (can be anything, e.g. 'bling')
console.time('bling');
// some other processes
// will log the time between the 2
console.timeEnd('bling');

console.count();
```



source: https://www.w3schools.com/jsref/obj_console.asp