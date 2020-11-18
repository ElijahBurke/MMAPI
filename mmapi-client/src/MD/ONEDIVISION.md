## Get A Division By ID

### To get a division you can send a GET request as shown below:

```sh
const fights = fetch('http://localhost:3001/division/:id')
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