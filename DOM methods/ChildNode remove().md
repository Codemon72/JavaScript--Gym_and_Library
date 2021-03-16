remove an element from the DOM

The ChildNode.remove() method removes the object from the tree it belongs to.

#### Syntax
`node.remove();`

Example
```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
````
```js
const el = document.getElementById('div-02');
el.remove(); // Removes the div with the 'div-02' id
```

source: https://developer.mozilla.org/de/docs/Web/API/ChildNode/remove