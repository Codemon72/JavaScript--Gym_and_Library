sources: 
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously across the network.

**Attentione**: The Promise returned from `fetch()` **won’t reject on HTTP error status** even if the response is an HTTP `404` or `500`. Instead, it will resolve normally (with `ok` status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.

The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object):
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Parameters
- resource - usually an url
- init object - optional - An object containing any custom settings that you want to apply to the request. The possible options are:
  - method (GET, POST, PUT, DELETE)
  - headers
  - body
  - mode
  - credentials
  - cache
  - redirect
  - and some more (details: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters)


### Return value
A Promise that resolves to a Response object.