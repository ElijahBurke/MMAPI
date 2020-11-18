## Get All Events

### To get all events you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/events')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

### We have information for all 541 events so far in the UFC!