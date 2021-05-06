sources:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

The `then()` method returns a Promise. It takes up to two arguments: a callback function for the success and one (optional) for failure cases of the Promise.


**Note**: If one or both arguments are omitted or are provided non-functions, then `then` will be missing the handler(s), but will not generate any errors. If the Promise that then is called on adopts a state (fulfillment or rejection) for which then has no handler, the returned promise adopts the final state of the original Promise on which then was called.