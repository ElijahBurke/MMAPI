# Divisions

#### Base endpoint: http://localhost:3001/divisions

### Use this endpoint to get information about any fighter who has ever fought in the UFC.
### Unfortunately the data is not complete for every fighter, as it is not publically available.

## Get All Divisions

### To get all divisions you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/divisions')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

## Get A Division By ID

### To get a division you can send a GET request as shown below:

```sh
const fights = fetch('http://localhost:3001/divisions/:id')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

### The response might look something like this:

```sh
{
  id: 1,
  division_name: "women's strawweight",
  min_weight: 0,
  max_weight: 115,
  fighters: []
}
```