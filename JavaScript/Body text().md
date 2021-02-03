reads a Response stream and returns promise resolving as text

`Body.text()` - takes a Response stream and reads it to completion. It returns a promise that resolves with a USVString (text). The response is *always* decoded using UTF-8.

source: https://developer.mozilla.org/en-US/docs/Web/API/Body/text

Example:
```js
  useEffect(() => {
    fetch("https://virtserver.swaggerhub.com/appoll/bulk-product-manager/1.0.0/products")
      .then((response) => response.text())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  ```