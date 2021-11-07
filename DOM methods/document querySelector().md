
The Document method querySelector() **returns the first Element within the document** that matches the specified selector, or group of selectors. If no matches are found, null is returned.

**Note**: The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes.

#### Syntax
`element = document.querySelector(selectors);`

### Parameters
- selectors
  A DOMString selecting a DOM element in the same syntax as in a CSS file.

### Return Value
A NodeList object, representing the first element that matches the specified CSS selector(s). If no matches are found, null is returned. Throws a SYNTAX_ERR exception if the specified selector(s) is invalid.

### Example:
```js
const el = document.querySelector("div.user-panel.main input[name='login']");
``` 

source: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
