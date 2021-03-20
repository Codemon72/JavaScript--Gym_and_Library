
sources: 
https://developer.mozilla.org/en-US/docs/Web/API/Window
https://www.w3schools.com/jsref/obj_window.asp
https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757244

### Properties and Methods
```js
// Outer Height and Width
window.outerHeight
window.outerWidth

// Inner Height and Width
window.innerHeight
window.innerWidth

// Scroll points
window.scrollY
window.scrollX

// Location Object
window.location
window.location.hostname
window.location.port
window.location.href
window.location.search // query string, eg: '?id=2
// and many more

// Redirect
window.location = 'https://duckduckgo.com/'

// Reload
window.location.reload()

// History Object
window.history.go(-2) // will go back in browsing history 2 steps
window.history.length // how many sites you have browsed in this tab

// Navigator Object
window.navigator // access to useragent, geolocation, storage, platform (users operating system)
window.navigator.appName
window.navigator.appVersion
window.navigator.userAgent
window.navigator.vendor
window.navigator.language
```

#### Local Storage
https://www.w3schools.com/jsref/prop_win_localstorage.asp

Denis Ivy saves in Local Storage: https://youtu.be/r_hYR53r61M?t=6740

#### Pop up Boxes
All pop up boxes are **methods** on the window object:

`Window.alert()`
Displays an alert dialog.

`Window.confirm()`
Displays a dialog with a message that the user needs to respond to.
```js
if (confirm('Are you sure?')) {
  console.log('yes');
} else {
  console.log('no')
}
```

`Window.prompt()`
Returns the text entered by the user in a prompt dialog.