## Get All Divisions

### To get all divisions you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/divisions')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```
