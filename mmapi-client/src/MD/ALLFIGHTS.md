## Get All Fights

### To get all fights you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/fights')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

## Warning!

### We have information for 5834 fights, so expect a large payload!