The `getElementsByTagName` method of Document interface returns an **HTMLCollection** of elements with the given tag name. The complete document is searched, including the root node. The returned **HTMLCollection** is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.`getElementsByTagName()` again.

### Syntax
`const elements = document.getElementsByTagName(name);`

- elements is a **live** HTMLCollection (but see the note below) of found elements in the order they appear in the tree.
- name is a string representing the name of the elements. The special string "*" represents all elements.

> The latest W3C specification says elements is an HTMLCollection; however, this method returns a NodeList in WebKit browsers. See bug 14869 for details.


source: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName