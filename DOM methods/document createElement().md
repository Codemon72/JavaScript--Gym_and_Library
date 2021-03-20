
The createElement() method creates an Element Node with the specified name.

HTML elements often contains text. To create a button with text, use the **innerText** or **innerHTML** properties of the element object.

**Tip**: After the element is created, use the element.appendChild() or element.insertBefore() method to insert it to the document.


### Syntax
`document.createElement(nodename)`

Parameter
- nodename (String)	- Required. The name of the element you want to create

**Return Value**:	An Element object, which represents the created Element node

**Examples**
Create a button with text:
```js
const btn = document.createElement("button");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
document.body.appendChild(btn);               // Append <button> to <body>
```

source: https://www.w3schools.com/jsref/met_document_createelement.asp