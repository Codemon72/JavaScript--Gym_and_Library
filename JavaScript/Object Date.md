is used to work with dates and times.

The Date object is used to work with dates and times.

Date objects are created with new Date().

There are four ways of instantiating a date:

`const d = new Date();`
`const d = new Date(milliseconds);`
`const d = new Date(dateString);`
`const d = new Date(year, month, day, hours, minutes, seconds, milliseconds);`

Having done so here are a couple of methods that can be called on a date instance:
```js
const date = new Date();

date.getMonth(); // zero based: 0 - 11
date.getDate(); // day of the month
date.getDay(); // day of the week; Sunday (1) to Saturday (7)
date.getFullYear(); // 2021
date.getHours(); 
date.getMinutes();
date.getSeconds();
date.getMiliseconds();
date.getTime(); // Timestamp = seconds that have past since 01.01.1970 

date.setMonth(2); // changes month
date.setDate(12); // changes day of month
date.setFullYear(1985); // 
date.setHours(3); 
date.setMinutes(43);
// etc 

```



source: https://www.w3schools.com/jsref/jsref_obj_date.asp