# Events

#### Base endpoint: http://localhost/3001/events

### Use this endpoint to get information about any fighter who has ever fought in the UFC.
### Unfortunately the data is not complete for every fighter, as it is not publically available.

## Get All Events

### To get all events you can send a GET request to the endpoint, as shown below:

```sh
const fights = fetch('http://localhost:3001/events')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

### We have information for all 541 events so far in the UFC!

## Get An Event By ID

### To get an event you can send a GET request as shown below:

```sh
const fights = fetch('http://localhost:3001/events/:id')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

### The response might look something like this:

```sh
{
  id: 7,
  name: "UFC Fight Night: Holm vs. Aldana",
  location: "Abu Dhabi, Abu Dhabi, United Arab Emirates",
  date: "2020-10-02T23:00:00.000Z",
  fights: [],
  potn: []
}
```