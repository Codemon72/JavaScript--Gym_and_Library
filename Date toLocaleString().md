The `toLocaleString()` method returns a Date object as a string, using locale settings.

The default language depends on the locale setup on your computer.

### Syntax
`Date.toLocaleString(locales, options)`

### Parameters

- locales - optional  a string that specifies which language format to use.
  - for example: `"en-US US English"`

- options	- Optional. An object were you can set some properties.

### Examples:
```js
// to change an ISO 8601 date format coming from a database into a domstring readable by an html input field
const session_start = new Date(wipSession.session_start).toLocaleString('sv-SE').replace(" ", "T")

```

source: https://www.w3schools.com/jsref/jsref_tolocalestring.asp