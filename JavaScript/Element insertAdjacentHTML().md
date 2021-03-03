parses specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.

Allows to append an element as a sibling.

Legal position values are:

"afterbegin"
"afterend"
"beforebegin"
"beforeend"

### Syntax
`element.insertAdjacentHTML(position, text);`

##### Parameters
- position
    A DOMString representing the position relative to the element; must be one of the following strings:
  - 'beforebegin': Before the element itself.
  - 'afterbegin': Just inside the element, before its first child.
  - 'beforeend': Just inside the element, after its last child.
  - 'afterend': After the element itself.
- text
    The string to be parsed as HTML or XML and inserted into the tree.

##### Visualization of position names
```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```
Note: The beforebegin and afterend positions work only if the node is in the DOM tree and has a parent element.

Example: 
```js
const h = document.getElementById('myImage');
h.insertAdjacentHTML('afterend', '<p class="caption">My Image Caption</p>');
```

sources:
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp