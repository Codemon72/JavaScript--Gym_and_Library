https://developer.mozilla.org/en-US/docs/Web/API/Console/dir

Great to inspect a **DOM node** as a **JS object**. 
(Instead of its' markup - what `console.log()` will give you.)

```js
const btn = document.getElementById('add-pin');

console.dir(btn);
```

![example for console.dir()](/images/example_for_console.dir().png)

### Even more recommended for Node.js
... with added styling:

![example for console.dir() in Node.js](/images/example_for_console.dir()_in_Node.png)

sources:
- https://youtu.be/TtsvMRxmfGA?t=421
- https://developer.mozilla.org/en-US/docs/Web/API/Console/dir