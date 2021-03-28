The Document method `querySelectorAll()` returns a static (not live) **NodeList** representing a list of the document's elements that match the specified group of selectors.

**Note**: Because this does **not** return an **HTMLCollection** but a **NodeList** we don't have to convert it into an array to run `forEach()` on it.


### Syntax
`elementList = parentNode.querySelectorAll(selectors);`

### Parameters
selectors
A DOMString containing one or more selectors to match against. This string must be a valid CSS selector string; if it's not, a SyntaxError exception is thrown. See Locating DOM elements using selectors for more information about using selectors to identify elements. Multiple selectors may be specified by separating them using commas.

### Return value
A **non-live** **NodeList** containing one Element object for each element that matches at least one of the specified selectors or an empty NodeList in case of no matches.

Example
```js
const items = document.querySelectorAll('ul.collection li.collection-item'); 

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li, index) => {
  li.style.background = '#ccc';
});

// this would also work on an HTMLCollection:
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
};
```

source: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll