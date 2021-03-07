When an HTML document is loaded into a web browser, it becomes a document object.

The document object is the root node of the HTML document.

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

#### Properties I've Used and Liked
- Document.forms - Read only
  Returns a list of the <form> elements within the current document.

sources:
- https://www.w3schools.com/jsref/dom_obj_document.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Document