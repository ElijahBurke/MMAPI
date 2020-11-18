## Get All Fighters

### To get all fights you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost/3001/fighters')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

## Warning!

### We have information for every fighter who has fought in the UFC, so expect a large pay load!
