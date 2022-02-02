The setTimeout() method calls a function after a number of milliseconds.

### Parameters
- function - Required. The function to execute.
- milliseconds - Optional. Number of milliseconds to wait before executing.
  Default value is 0.
- param1, - Optional. Parameters to pass to the function.
  param2,
  ...	


### Return Value
- A number - 	The id of the timer.
  Use this id with `clearTimeout(id)` to cancel the timer.

**Note**
- The setTimeout() is executed only once.
- If you need repeated executions, use `setInterval()` instead.
- Use the `clearTimeout()` method to prevent the function from starting.
- To clear a timeout, use the id returned from `setTimeout()`:
`myTimeout = setTimeout(function, milliseconds);`
Then you can to stop the execution by calling `clearTimeout()`:
`clearTimeout(myTimeout);`

sources: https://www.w3schools.com/jsref/met_win_settimeout.asp


Examples: 
- many small examples: https://www.w3schools.com/jsref/met_win_settimeout.asp

```s
const successAlert = document.createElement('div');
    successAlert.classList.add('Alert_Form_Sent')
    successAlert.innerHTML = '{{ "contact.form.product_successfully_sent" | t }}';
    document.getElementById('main').prepend(successAlert);
    setTimeout(() => { successAlert.innerHTML='blub'}, 1000);
    setTimeout(() => { console.log('bazinga')}, 2000);
    setTimeout(() => { successAlert.remove() }, 3000);
```