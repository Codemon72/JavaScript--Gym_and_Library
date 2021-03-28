The Document method `querySelector()` returns **the first** Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

**Note**: The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes.

### Syntax
`element = document.querySelector(selectors);`

### Parameters
selectors
A DOMString containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more about selectors and how to manage them.
**Note**: Characters that are not part of standard CSS syntax must be escaped using a backslash character. Since JavaScript also uses backslash escaping, be especially careful when writing string literals using these characters. See Escaping special characters for more information.

### Return value
An HTMLElement object representing the first element in the document that matches the specified set of CSS selectors, or null is returned if there are no matches.

**Tip**: If you need a list of all elements matching the specified selectors, you should use querySelectorAll() instead.

Examples:

```js
document.querySelector('#bling');
document.querySelector('.fancy-class');
document.querySelector('h2');

document.querySelector('.card ul li').style.color = 'orangered';

document.querySelector('li:last-child').style.color = 'orangered';
document.querySelector('li:nth-child(3)').textContent = 'Hello World! I am #3';
```

source: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector