The `getElementsByClassName` method of Document interface returns an _array-like_ object of all child elements which have all of the given class name(s). When called on the document object, the complete document is searched, including the root node. 
You may also call `getElementsByClassName()` on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

**Warning**: This is a live HTMLCollection. Changes in the DOM will reflect in the array as the changes occur. If an element selected by this array no longer qualifies for the selector, it will automatically be removed. Be aware of this for iteration purposes.

### Syntax
```js
const elements = document.getElementsByClassName(names); // or:
const elements = rootElement.getElementsByClassName(names);
```
- elements is a live HTMLCollection of found elements.
- names is a string representing the class name(s) to match; multiple class names are separated by whitespace
- getElementsByClassName can be called on any element, not only on the document. The element on which it is called will be used as the root of the search.


Example:
```js
const items = document.getElementsByClassName('collection-item'); // 

// target only the children of a specific element
const listItems = document.querySelector('ul').getElementByClassName('collection-item');
```

Get all elements that have a class of 'test':
```js
document.getElementsByClassName('test')
```

Get all elements that have both the 'red' and 'test' classes:
```js
document.getElementsByClassName('red test')
```

Get all elements that have a class of 'test', inside of an element that has the ID of 'main':
```js
document.getElementById('main').getElementsByClassName('test')
```

Get the first element with a class of 'test', or undefined if there is no matching element:
```js
document.getElementsByClassName('test')[0]
```

### Get the first element whose class is 'test'

This is the most commonly used method of operation.
```html
<html>
<body>
    <div id="parent-id">
        <p>hello world 1</p>
        <p class="test">hello world 2</p>
        <p>hello world 3</p>
        <p>hello world 4</p>
    </div>

    <script>
        const parentDOM = document.getElementById("parent-id");

        const test = parentDOM.getElementsByClassName("test"); // a list of matching elements, *not* the element itself
        console.log(test); //HTMLCollection[1]

        const testTarget = parentDOM.getElementsByClassName("test")[0]; // the first element, as we wanted
        console.log(testTarget); //<p class="test">hello world 2</p>
    </script>
</body>
</html>
```

source: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName