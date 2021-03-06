The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events.

The addEventListener() method attaches an event handler to the specified element.

**Tip**: Use the removeEventListener() method to remove an event handler that has been attached with the addEventListener() method.

**Tip**: Use the document.addEventListener() method to attach an event handler to the document.

#### Syntax
`element.addEventListener(event, function, useCapture)`

Parameters
- event - 	Required. A String that specifies the name of the event.
  **Note**: Do not use the "on" prefix. For example, use "click" instead of "onclick".
  For a list of all HTML DOM events, look at our [complete HTML DOM Event Object Reference](https://www.w3schools.com/jsref/dom_obj_event.asp).
- function - Required. Specifies the function to run when the event occurs.
  When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object.
- useCapture -	Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase.
  Possible values:
  - true - The event handler is executed in the capturing phase
  - false- Default. The event handler is executed in the bubbling phase

Events I've used and liked:
- blur	The event occurs when an element loses focus
- change	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)	
- click	The event occurs when the user clicks on an element
- focus	The event occurs when an element gets focus
- input	The event occurs when an element gets user input
- load	The event occurs when an object has loaded
- scroll	The event occurs when an element's scrollbar is being scrolled
List of Events: https://www.w3schools.com/jsref/dom_obj_event.asp

sources: 
https://www.w3schools.com/jsref/met_element_addeventlistener.asp
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener