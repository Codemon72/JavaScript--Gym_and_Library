**Tip**: Use the setAttribute() method to add an attribute to an element.

### Syntax
`element.removeAttribute(attributename)`

### Parameters

- attributename	String - 	Required. The name of the attribute you want to remove


source: https://www.w3schools.com/jsref/met_element_removeattribute.asp

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