# `MMAPI: One Stop For All Your UFC Data`

Use our API to retrieve stats from any UFC event you wish. Use traditional REST queries to get general data or fully customise your requests using the GraphQL playground.

## Table of Contents

- [**REST API**](#REST-API)
- [**GraphQl API**](#GraphQl-API)
  - [**Type Definitions**](#Type-Definitions)
  - [**Queries**](#Queries)
- **Examples**
  - [**REST Examples**](#REST-Examples)
  - [**GRAPHQL Examples**](#GraphQL-Examples)


## REST API

To access the data you can send a GET request as shown in the examples below (Here we are using 'fetch'). 
The base endpoint is **http://localhost:3001/**

Possible endpoints are:

1. `fights`

2. `fights/:id`

3. `fighters`

4. `fighters/:id`

5. `events`

6. `events/:id`

7. `divisions`

8. `divisions/:id`


## GraphQl API

Query for customized data using the [GraphQl Playground](http://localhost:3000/graphql). 
As with the REST API there are four different types to query (see the different [type definitions](#Type Definitions). 

If no arguments are passed during the query, all the relevant data of that type will return. The provided [queries](#Queries) show the possible arguments that can be passed to narrow down your search.

### Queries

#### Query: Fights

```
  fights(
    id: Int
    fighter: String
    winner: String
    rounds: Int
    method: String
    details: String
    fotn: Boolean
    ): [Fight]!
```



#### Query: Fighters

```
    fighters(
      id: Int
      name: String
      nickname: String
      height: String
      weight_lbs: String
      reach: String
      stance: String
      dob: String
      wins: String
      losses: String
      no_contest: String
      record: String
      is_champ: Boolean
      slpm: Float
      str_acc: String
      sapm: Float
      str_def: String
      td_avg: Float
      td_def: String
      td_acc: String
      sub_avg: Float
      ): [Fighter]!
```



#### Query: Events

```
      events(
        id: Int
        name: String
        location: String
        date: Date
        ): [Event]!
```



#### Query: Divisions

```
      divisions(
        id: Int
        division_name: String
        min_weight: Int
        max_weight: Int
        ): [Division]!
```



---



### Type Definitions

#### Type: Fight

```
    id: Int!
    event: Event!
    division: Division
    blue_fighter: Fighter!
    red_fighter: Fighter!
    winner: String!
    method: String!
    details: String!
    rounds: Int!
    round_end_time: String!
    fotn: Boolean!
    n_rounds: String!
    r_kd: Int!
    r_sig_str_attempts: Int!
    r_sig_str_landed: Int!
    r_total_str_attempts: Int!
    r_total_str_landed: Int!
    r_td_attempts: Int!
    r_td_landed: Int!
    r_sub_att: Int!
    r_reversal: Int!
    r_ctrl: String!
    b_kd: Int!
    b_sig_str_attempts: Int!
    b_sig_str_landed: Int!
    b_total_str_attempts: Int!
    b_total_str_landed: Int!
    b_td_attempts: Int!
    b_td_landed: Int!
    b_sub_att: Int!
    b_reversal: Int!
    b_ctrl: String!
    r_kd_r1: Int!
    r_sig_str_attempts_r1: Int!
    r_sig_str_landed_r1: Int!
    r_total_str_attempts_r1: Int!
    r_total_str_landed_r1: Int!
    r_td_attempts_r1: Int!
    r_td_landed_r1: Int!
    r_sub_att_r1: Int!
    r_reversal_r1: Int!
    r_ctrl_r1: String!
    b_kd_r1: Int!
    b_sig_str_attempts_r1: Int!
    b_sig_str_landed_r1: Int!
    b_total_str_attempts_r1: Int!
    b_total_str_landed_r1: Int!
    b_td_attempts_r1: Int!
    b_td_landed_r1: Int!
    b_sub_att_r1: Int!
    b_reversal_r1: Int!
    b_ctrl_r1: String!
    r_kd_r2: Int
    r_sig_str_attempts_r2: Int
    r_sig_str_landed_r2: Int
    r_total_str_attempts_r2: Int
    r_total_str_landed_r2: Int
    r_td_attempts_r2: Int
    r_td_landed_r2: Int
    r_sub_att_r2: Int
    r_reversal_r2: Int
    r_ctrl_r2: String
    b_kd_r2: Int
    b_sig_str_attempts_r2: Int
    b_sig_str_landed_r2: Int
    b_total_str_attempts_r2: Int
    b_total_str_landed_r2: Int
    b_td_attempts_r2: Int
    b_td_landed_r2: Int
    b_sub_att_r2: Int
    b_reversal_r2: Int
    b_ctrl_r2: String
    r_kd_r3: Int
    r_sig_str_attempts_r3: Int
    r_sig_str_landed_r3: Int
    r_total_str_attempts_r3: Int
    r_total_str_landed_r3: Int
    r_td_attempts_r3: Int
    r_td_landed_r3: Int
    r_sub_att_r3: Int
    r_reversal_r3: Int
    r_ctrl_r3: String
    b_kd_r3: Int
    b_sig_str_attempts_r3: Int
    b_sig_str_landed_r3: Int
    b_total_str_attempts_r3: Int
    b_total_str_landed_r3: Int
    b_td_attempts_r3: Int
    b_td_landed_r3: Int
    b_sub_att_r3: Int
    b_reversal_r3: Int
    b_ctrl_r3: String
    r_kd_r4: Int
    r_sig_str_attempts_r4: Int
    r_sig_str_landed_r4: Int
    r_total_str_attempts_r4: Int
    r_total_str_landed_r4: Int
    r_td_attempts_r4: Int
    r_td_landed_r4: Int
    r_sub_att_r4: Int
    r_reversal_r4: Int
    r_ctrl_r4: String
    b_kd_r4: Int
    b_sig_str_attempts_r4: Int
    b_sig_str_landed_r4: Int
    b_total_str_attempts_r4: Int
    b_total_str_landed_r4: Int
    b_td_attempts_r4: Int
    b_td_landed_r4: Int
    b_sub_att_r4: Int
    b_reversal_r4: Int
    b_ctrl_r4: String
    r_kd_r5: Int
    r_sig_str_attempts_r5: Int
    r_sig_str_landed_r5: Int
    r_total_str_attempts_r5: Int
    r_total_str_landed_r5: Int
    r_td_attempts_r5: Int
    r_td_landed_r5: Int
    r_sub_att_r5: Int
    r_reversal_r5: Int
    r_ctrl_r5: String
    b_kd_r5: Int
    b_sig_str_attempts_r5: Int
    b_sig_str_landed_r5: Int
    b_total_str_attempts_r5: Int
    b_total_str_landed_r5: Int
    b_td_attempts_r5: Int
    b_td_landed_r5: Int
    b_sub_att_r5: Int
    b_reversal_r5: Int
    b_ctrl_r5: String
```



#### Type: Fighter

```
    id: Int!
    division: Division
    potn: [Event]
    name: String!
    nickname: String
    height: String
    weight_lbs: String
    reach: String
    stance: String
    dob: String
    wins: String!
    losses: String!
    no_contest: String!
    record: String!
    is_champ: Boolean!
    slpm: Float
    str_acc: String
    sapm: Float
    str_def: String
    td_avg: Float
    td_def: String
    td_acc: String
    sub_avg: Float
    fights: [Fight]
```



#### Type: Event

```
  id: Int!
      name: String!
      location: String!
      date: Date!
      fights: [Fight]!
      potn: [Fighter]
      fotn: [Fight]
```



#### Type: Division

```
    id: Int!
    division_name: String!
    min_weight: Int!
    max_weight: Int!
    fighters: [Fighter]!
    fights: [Fight]!
    champ: Fighter!
```


   
## REST Examples

### Get All Fights

```sh
const fights = fetch('http://localhost:3001/fights')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```

**WARNING!** We have information for 5834 fights and for every fighter in the UFC, so expect a large payload.



### Get One Fight

```sh
const fights = fetch('http://localhost:3001/fights/:id')
  .then(resp => resp.status >= 400 ? Promise.reject() : resp.json())
  .catch(err => console.log('Oops!'));
```



The response might look something like this:

```
{
  id: 5,
  winner: "blue",
  method: "Women's Strawweight Bout",
  details: "28-29.28-29.28-29.",
  rounds: 3,
  round_end_time: "5:00",
  fotn: false,
  n_rounds: "3 Rnd (5-5-5)",
  b_kd: 0,
  b_sig_str_attempts: 170,
  b_sig_str_landed: 74,
  b_total_str_attempts: 234,
  b_total_str_landed: 133,
  b_td_attempts: 0,
  b_td_landed: 0,
  b_sub_att: 0,
  b_reversal: 0,
  b_ctrl: "0:19",
  r_kd: 0,
  r_sig_str_attempts: 96,
  r_sig_str_landed: 36,
  r_total_str_attempts: 149,
  r_total_str_landed: 84,
  r_td_attempts: 10,
  r_td_landed: 2,
  r_sub_att: 0,
  r_reversal: 0,
  r_ctrl: "6:46",
  b_kd_r1: 0,
  b_sig_str_attempts_r1: 36,
  b_sig_str_landed_r1: 19,
  b_total_str_attempts_r1: 70,
  b_total_str_landed_r1: 51,
  b_td_attempts_r1: 0,
  b_td_landed_r1: 0,
  b_sub_att_r1: 0,
  b_reversal_r1: 0,
  b_ctrl_r1: "0:00",
  r_kd_r1: 0,
  r_sig_str_attempts_r1: 26,
  r_sig_str_landed_r1: 10,
  r_total_str_attempts_r1: 72,
  r_total_str_landed_r1: 53,
  r_td_attempts_r1: 5,
  r_td_landed_r1: 2,
  r_sub_att_r1: 0,
  r_reversal_r1: 0,
  r_ctrl_r1: "4:06",
  b_kd_r2: 0,
  b_sig_str_attempts_r2: 78,
  b_sig_str_landed_r2: 26,
  b_total_str_attempts_r2: 80,
  b_total_str_landed_r2: 27,
  b_td_attempts_r2: 0,
  b_td_landed_r2: 0,
  b_sub_att_r2: 0,
  b_reversal_r2: 0,
  b_ctrl_r2: "0:00",
  r_kd_r2: 0,
  r_sig_str_attempts_r2: 43,
  r_sig_str_landed_r2: 17,
  r_total_str_attempts_r2: 44,
  r_total_str_landed_r2: 18,
  r_td_attempts_r2: 1,
  r_td_landed_r2: 0,
  r_sub_att_r2: 0,
  r_reversal_r2: 0,
  r_ctrl_r2: "0:07",
  b_kd_r3: 0,
  b_sig_str_attempts_r3: 56,
  b_sig_str_landed_r3: 29,
  b_total_str_attempts_r3: 84,
  b_total_str_landed_r3: 55,
  b_td_attempts_r3: 0,
  b_td_landed_r3: 0,
  b_sub_att_r3: 0,
  b_reversal_r3: 0,
  b_ctrl_r3: "0:19",
  r_kd_r3: 0,
  r_sig_str_attempts_r3: 27,
  r_sig_str_landed_r3: 9,
  r_total_str_attempts_r3: 33,
  r_total_str_landed_r3: 13,
  r_td_attempts_r3: 4,
  r_td_landed_r3: 0,
  r_sub_att_r3: 0,
  r_reversal_r3: 0,
  r_ctrl_r3: "2:33",
  b_kd_r4: null,
  b_sig_str_attempts_r4: null,
  b_sig_str_landed_r4: null,
  b_total_str_attempts_r4: null,
  b_total_str_landed_r4: null,
  b_td_attempts_r4: null,
  b_td_landed_r4: null,
  b_sub_att_r4: null,
  b_reversal_r4: null,
  b_ctrl_r4: null,
  r_kd_r4: null,
  r_sig_str_attempts_r4: null,
  r_sig_str_landed_r4: null,
  r_total_str_attempts_r4: null,
  r_total_str_landed_r4: null,
  r_td_attempts_r4: null,
  r_td_landed_r4: null,
  r_sub_att_r4: null,
  r_reversal_r4: null,
  r_ctrl_r4: null,
  b_kd_r5: null,
  b_sig_str_attempts_r5: null,
  b_sig_str_landed_r5: null,
  b_total_str_attempts_r5: null,
  b_total_str_landed_r5: null,
  b_td_attempts_r5: null,
  b_td_landed_r5: null,
  b_sub_att_r5: null,
  b_reversal_r5: null,
  b_ctrl_r5: null,
  r_kd_r5: null,
  r_sig_str_attempts_r5: null,
  r_sig_str_landed_r5: null,
  r_total_str_attempts_r5: null,
  r_total_str_landed_r5: null,
  r_td_attempts_r5: null,
  r_td_landed_r5: null,
  r_sub_att_r5: null,
  r_reversal_r5: null,
  r_ctrl_r5: null,
  divisionId: 1,
  eventId: 2,
  fighters: [
    {
      id: 1033,
      name: "Claudia Gadelha",
      nickname: "Claudinha",
      height: "5'4"",
      weight_lbs: "115",
      reach: "63"",
      stance: "Orthodox",
      dob: "Dec07,1988",
      wins: "18",
      losses: "5",
      no_contest: "0",
      record: "18-5-0",
      is_champ: false,
      slpm: "3.31",
      str_acc: "41%",
      sapm: "4.57",
      str_def: "57%",
      td_avg: "3.03",
      td_def: "58%",
      td_acc: "42%",
      sub_avg: "0.70",
      divisionId: 1,
      fighter_fights: {
        color: "red",
        fightId: 5,
        fighterId: 1033
      }
    },
    {
      id: 3520,
      name: "Yan Xiaonan",
      nickname: "",
      height: "5'5"",
      weight_lbs: "115",
      reach: "63"",
      stance: "Orthodox",
      dob: "Jun16,1989",
      wins: "13",
      losses: "1",
      no_contest: "0",
      record: "13-1-0",
      is_champ: false,
      slpm: "6.42",
      str_acc: "42%",
      sapm: "3.63",
      str_def: "63%",
      td_avg: "1.00",
      td_def: "75%",
      td_acc: "75%",
      sub_avg: "0.00",
      divisionId: 1,
      fighter_fights: {
        color: "blue",
        fightId: 5,
        fighterId: 3520
      }
    }
  ],
  event: {
    id: 2,
    name: "UFC Fight Night: Santos vs. Teixeira",
    location: "Las Vegas, Nevada, USA",
    date: "2020-11-07T00:00:00.000Z"
    },
    division: {
    id: 1,
    division_name: "women's strawweight",
    min_weight: 0,
    max_weight: 115
  }
}
```

---




## GraphQl Examples

### Get All Events

This code shows how to query the graphql api  with a POST request. This query will return an array of all events with the properties id, name and location.

```      
fetch('http://localhost:3001/graphql', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	body: JSON.stringify(
		{query: "{
			events {
  			id
  			name
  			location
			}
		}
	"})
	})
.then(r => r.json())
.then(data => console.log('data returned:', data));
```



### Get One Fight

This more complex request shows how you can do nested requests and only receive back the specific properties that you are searching for.

```      
fetch('http://localhost:3001/graphql', {
	method: 'POST',
	headers: {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
        },
  body: JSON.stringify(
		{query: "{
			fights(id:65) {
				winner
				method
				red_fighter {
					id
					name
				}
				blue_fighter {
					id
					name
				}
				event {
					id
					name 
					location
        }
        division {
					id
       	 division_name
				}
			}
		}"
	})
})
	.then(r => r.json())
	.then(data => console.log('data returned:', data));
```



The result of the example above would be:

```
{
  "data": {
    "fights": [
      {
        "winner": "blue",
        "method": "Middleweight Bout",
        "red_fighter": {
          "id": 3471,
          "name": "Jordan Williams"
        },
        "blue_fighter": {
          "id": 1433,
          "name": "Nassourdine Imavov"
        },
        "event": {
          "id": 7,
          "name": "UFC Fight Night: Holm vs. Aldana",
          "location": "Abu Dhabi, Abu Dhabi, United Arab Emirates"
        },
        "division": {
          "id": 9,
          "division_name": "middleweight"
        }
      }
    ]
  }
}
```



----




## Developers

* Elijah Burke - [Github](https://github.com/ElijahBurke)

* Rafal Witczak - [Github](https://github.com/malkeeszon)

* Mandy Nijssen - [Github](https://github.com/manij89)

  







