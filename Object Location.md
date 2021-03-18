The location object contains information about the current URL.

The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.


## Location Object Methods

`assign()`
- Loads a new document. (Loads the resource at the URL provided in parameter.)
`reload()`	
- Reloads the current URL, like the Refresh button.
`replace()`	
- Replaces the current document with a new one
- Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the assign() method and setting the href property is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.

sources: 
- https://developer.mozilla.org/en-US/docs/Web/API/Location
- https://www.w3schools.com/jsref/obj_location.asp