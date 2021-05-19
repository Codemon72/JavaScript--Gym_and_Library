### Syntax
`element.setAttribute(attributename, attributevalue)`

### Parameters

- attributename	String	- Required. The name of the attribute you want to add
- attributevalue	String -	Required. The value of the attribute you want to add

**Tip**: Use the removeAttribute() method to remove an attribute from an element.

source: https://www.w3schools.com/jsref/met_element_setattribute.asp

Example: 
```js
const consentCheckbox = document.getElementById('gdpr_24351');
const submitButton = document.getElementById('mc-embedded-subscribe');
consentCheckbox.addEventListener('click', () => {
  if (consentCheckbox.checked === true) {
  submitButton.removeAttribute('disabled');
} else {submitButton.setAttribute('disabled', true)}
});
```