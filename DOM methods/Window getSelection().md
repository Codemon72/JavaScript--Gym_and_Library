
The Window.getSelection() method returns a Selection object representing the range of text selected by the user or the current position of the cursor.

**Tips**: 
- You can call Document.getSelection(), which works identically to Window.getSelection().
- It is worth noting that currently getSelection() doesn't work on the content of <textarea> and <input> elements in Firefox, Edge (Legacy) and Internet Explorer. HTMLInputElement.setSelectionRange() or the selectionStart and selectionEnd properties could be used to work around this.
- Notice also the difference between selection and focus. Document.activeElement returns the focused element.

#### Syntax
`getSelection()`

Parameters
- none


**Return Value**:	a Selection object
Check out Selection Object: https://developer.mozilla.org/en-US/docs/Web/API/Selection

Example
```js
// log string from selected text every 3 seconds
const logSelectedText = () => {
  let selectedText = window.getSelection().toString();
  console.log(selectedText);
}

let intervalId = window.setInterval(() => {
  logSelectedText();
}, 3000);
```

source: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection