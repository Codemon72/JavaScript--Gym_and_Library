The Document method `getElementById()` returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

If you need to get access to an element which doesn't have an ID, you can use `querySelector()` to find the element using any selector.


### Syntax
`const element = document.getElementById(id);`

### Parameters
id
The ID of the element to locate. The ID is case-sensitive string which is unique within the document; only one element may have any given ID.

### Return value
An Element object describing the DOM element object matching the specified ID, or null if no matching element was found in the document.

Examples
```js
// get properties from element
console.log(document.getElementById('bling').id); // bling
console.log(document.getElementById('bling').className); // e.g.: 'fancy'

// change styling
document.getElementById('bling').style.background = '#333';
document.getElementById('bling').style.color = '#fff';
document.getElementById('bling').style.padding = '5px 10px';
document.getElementById('bling').style.display = 'none';

// change content
document.getElementById('bling').textContent = 'Bling Div';
document.getElementById('bling').innerText = 'Bling Div';
document.getElementById('bling').innerHTML = '<span color="orangered">Bling Div</span>';
```

source: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById