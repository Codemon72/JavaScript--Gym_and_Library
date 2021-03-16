When an HTML document is loaded into a web browser, it becomes a document object.

The document object is the root node of the HTML document.

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

#### Properties I've Used and Liked
https://developer.mozilla.org/en-US/docs/Web/API/Document#properties
- Document.forms
  Returns an HTMLCollection of the <form> elements within the current document.
  If the document has no forms, the returned collection is empty, with a length of zero.
  Examples:
  ```html
  <form name="login">
  <input name="email" type="email">
  <input name="password" type="password">
  <button type="submit">Log in</button>
  </form>

  <script>
    var loginForm = document.forms.login; // Or document.forms['login']
    loginForm.elements.email.placeholder = 'test@example.com';
    loginForm.elements.password.placeholder = 'password';
  </script>
  ```
  ```js
  // simple check for a form on a page
  if (document.forms.length > 0){
  console.log('Form!')
  }
  ```

- Document.activeElement - Read only
  Returns the Element that currently has focus.

sources:
- https://www.w3schools.com/jsref/dom_obj_document.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Document